"use client";

import React, { useState } from 'react';

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            id: Math.random().toString(36).substr(2, 9), 
            name: name.trim(),  
            quantity: parseInt(quantity),
            category: category // 
        };

        onAddItem(newItem);

        setName("");
        setQuantity("1");
        setCategory("Produce");
    };

    return (
        <main className="flex justify w-full">
            <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
                <div className="mb-2">
                    <input
                        id="name"
                        type="text"
                        placeholder="Item Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="text-black w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                        required
                    />
                </div>

                <div className="flex justify-between">
                    <input
                        onChange={(e) => setQuantity(e.target.value)}
                        id="quantity"
                        type="number"
                        min="1"
                        max="99"
                        value={quantity}
                        className="w-200px px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    />

                    <select
                        id="category"
                        className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        required
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </main>
    );
}
