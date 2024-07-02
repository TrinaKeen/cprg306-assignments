"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function ItemPage() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="p-10 bg-slate-950">
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
         
            <ItemList items={items} />
        </main>
    );
}
