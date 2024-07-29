"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function ItemPage() {
    const [items, setItems] = useState(itemsData);

    // Event handler to add a new item
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="p-10 bg-slate-950 flex">
            <div className="w-1/2 pr-8"> {/* Left side for NewItem and ItemList */}
                <h1 className="text-3xl font-bold m-2">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </main>
    );
}
