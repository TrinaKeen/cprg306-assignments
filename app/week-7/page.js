"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas'; // Import MealIdeas component
import itemsData from './items.json';

export default function ItemPage() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    // Event handler to handle item selection
    const handleItemSelect = (item) => {
        // Clean up the item name (remove emojis, sizes, etc.)
        const cleanedItemName = cleanItemName(item.name);
        setSelectedItemName(cleanedItemName);
    };

    // Function to clean up item name (remove emojis and extra details)
    const cleanItemName = (itemName) => {
        return itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    };

    // Event handler to add a new item
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="p-10 bg-slate-950 flex">
            <div className="w-1/2 pr-8"> {/* Left side for NewItem and ItemList */}
                <h1 className="text-3xl font-bold m-2">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2"> {/* Right side for MealIdeas */}
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}
