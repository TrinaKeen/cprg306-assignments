"use client";

import { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context'; // Adjust the path if needed
import { getItems, addItem } from '../_services/shopping-list-service'; // Import service functions
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import Link from 'next/link'; 

const HomePage = () => {
  const { user } = useUserAuth(); // Get the user from auth context
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to load items
  const loadItems = async () => {
    if (user?.uid) {
      try {
        const itemsData = await getItems(user.uid); // Fetch items for the current user
        setItems(itemsData); // Set items state
      } catch (error) {
        console.error('Error loading items:', error);
      }
    }
  };

  // Fetch items when component mounts or when user.uid changes
  useEffect(() => {
    loadItems();
  }, [user?.uid]);

  // Handle adding a new item
  const handleAddItem = async (newItem) => {
    if (user?.uid) {
      try {
        const newItemId = await addItem(user.uid, newItem); // Add item and get the new item's id
        setItems([...items, { ...newItem, id: newItemId }]); // Update items state with new item
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  const handleItemSelect = (item) => {
    
    const cleanedName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').split(',')[0].trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-10">
      <h2 class="text-3xl font-bold mb-4">Shopping List</h2>
      <Link 
      href="/"
      className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Back to HomePage
          </Link>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 flex-2 p-10">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

export default HomePage;
