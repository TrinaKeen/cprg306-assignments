"use client";
import { useEffect, useState } from "react";

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

 
  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      console.log("API Response:", data); 
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }
  
  

  async function loadMealIdeas() {
    const meals = await fetchMealIdeas(ingredient);
    console.log("Loaded Meals:", meals); 
    setMeals(meals);
    setSelectedMeal(null); 
  }


  async function fetchMealDetails(idMeal) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await response.json();
      console.log("Meal Details Response:", data); 
      return data.meals[0];
    } catch (error) {
      console.error("Error fetching meal details:", error);
      return null;
    }
  }


  const handleMealClick = async (idMeal) => {
    const mealDetails = await fetchMealDetails(idMeal);
    console.log("Selected Meal Details:", mealDetails); 
    setSelectedMeal(mealDetails);
  };

  return (
    <div className="rounded p-4 bg-slate-300 text-black flex">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">Meal Ideas</h2>
        {!ingredient ? (
          <p>Select an item to see meal ideas</p>
        ) : meals.length > 0 ? (
          <div>
            <h3 className="text-lg mb-2">Here are some meal ideas using {ingredient}:</h3>
            <ul className="list-disc list-inside">
              {meals.map(meal => (
                <li key={meal.idMeal} onClick={() => handleMealClick(meal.idMeal)} className="cursor-pointer hover:text-blue-500">
                  {meal.strMeal}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No meal ideas found for {ingredient}</p>
        )}
      </div>
      <div className="flex-1 ml-4">
        {selectedMeal && (
          <div>
            <h3 className="text-lg font-bold">{selectedMeal.strMeal}</h3>
            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-100px h-100px mt-2 mb-4 rounded" />
            <h4 className="text-md font-semibold">Ingredients needed:</h4>
            <ul className="list-disc list-inside mb-4">
              {Array.from({ length: 20 }, (_, i) => i + 1).map(i => {
                const ingredient = selectedMeal[`strIngredient${i}`];
                const measure = selectedMeal[`strMeasure${i}`];
                return ingredient ? <li key={i}>{ingredient} {measure && `(${measure})`}</li> : null;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default MealIdeas;
