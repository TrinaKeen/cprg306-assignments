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

  // Check the API response for the specified ingredient
  async function checkApiResponse() {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=bread`);
      const data = await response.json();
      console.log("API Response for 'bread':", data); // Log the API response for debugging
      return data.meals || [];
    } catch (error) {
      console.error("Error checking API response:", error);
      return [];
    }
  }

  // Fetch meal ideas from the API based on the ingredient
  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      console.log("API Response:", data); // Log the API response for debugging
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }

  // Load meal ideas and update state
  async function loadMealIdeas() {
    const meals = await fetchMealIdeas(ingredient);
    console.log("Loaded Meals:", meals); // Log the meals loaded
    setMeals(meals);
    setSelectedMeal(null); // Clear selected meal when ingredient changes
  }

  // Fetch details for a selected meal
  async function fetchMealDetails(idMeal) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await response.json();
      console.log("Meal Details Response:", data); // Log the meal details response
      return data.meals[0];
    } catch (error) {
      console.error("Error fetching meal details:", error);
      return null;
    }
  }

  // Handle meal click event
  const handleMealClick = async (idMeal) => {
    const mealDetails = await fetchMealDetails(idMeal);
    console.log("Selected Meal Details:", mealDetails); // Log the selected meal details
    setSelectedMeal(mealDetails);
  };

  return (
    <div>
      <h2>Meal Ideas</h2>
      {meals.length > 0 && ingredient && (
        <h3>Here are some meal ideas using {ingredient}:</h3>
      )}
      {meals.length === 0 && ingredient && (
        <p>No meal ideas found for {ingredient}</p>
      )}
      {meals.length > 0 && (
        <ul>
          {meals.map(meal => (
            <li key={meal.idMeal} onClick={() => handleMealClick(meal.idMeal)}>
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
      {selectedMeal && (
        <div>
          <h3>{selectedMeal.strMeal}</h3>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} style={{ width: "200px" }} />
          <h4>Ingredients needed:</h4>
          <ul>
            {Array.from({ length: 20 }, (_, i) => i + 1).map(i => {
              const ingredient = selectedMeal[`strIngredient${i}`];
              const measure = selectedMeal[`strMeasure${i}`];
              return ingredient ? <li key={i}>{ingredient} {measure && `(${measure})`}</li> : null;
            })}
          </ul>
          <p>{selectedMeal.strInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default MealIdeas;
