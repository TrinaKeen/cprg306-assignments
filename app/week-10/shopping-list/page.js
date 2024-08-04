"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function HomePage() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    // Clean up the item name
    const cleanedName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').split(',')[0].trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-10">
      <h1 className="text-3xl font-bold m-2">Shopping List 2</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 flex-2 p-10">
        <MealIdeas ingredient={selectedItemName} />
        
      </div>
    </div>
  );
}
