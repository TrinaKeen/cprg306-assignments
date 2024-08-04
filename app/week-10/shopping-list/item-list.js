"use client";

import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('name');

    // Sort items based on the selected criteria
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <section>
            <div className='flex mb-3 px-10 py-5 '>
                <div className='flex-1'>
                    <label className='mr-2'>Sort by:</label>
                    <button
                        className={`px-4 py-2 mr-2 rounded-md ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                        onClick={() => setSortBy('name')}
                    >
                        Name
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                        onClick={() => setSortBy('category')}
                    >
                        Category
                    </button>
                </div>
            </div>

            <div className='p-2 m-4 max-w-sm grid grid-cols-1 gap-5'>
                {sortedItems.map(item => (
                    <div key={item.id} className=" p-4 rounded-md shadow-md hover:bg-blue-200 transition">
                        <Item itemObj={item} onSelect={onItemSelect} />
                    </div>
                ))}
            </div>
        </section>
    );
}
