"use client";

import React, { useState, useEffect } from 'react';

// Define the MealIdeas component
export default function MealIdeas({ ingredient }) {
    // State variable to hold the list of meal ideas
    const [meals, setMeals] = useState([]);

    // Function to fetch meal ideas from the API
    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) {
                throw new Error('Failed to fetch meal ideas');
            }
            const data = await response.json();
            return data.meals; // Array of meals from API
        } catch (error) {
            console.error('Error fetching meal ideas:', error);
            return [];
        }
    };

    // Function to load meal ideas based on the ingredient prop
    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };

    // Load meal ideas whenever the ingredient prop changes
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    // Render method: Display header and list of meal names
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Meal Ideas with {ingredient}</h2>
            <ul className="list-disc pl-5">
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}
