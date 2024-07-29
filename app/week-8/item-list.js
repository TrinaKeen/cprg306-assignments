"use client";

import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('name');

    // Helper function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Create a copy of items prop and sort it based on the sortBy state variable
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
            <div className='flex mb-3 px-10 py-5 bg-grey-200'>
                <div className='flex-1'>
                    <label>Sort by: </label>
                    <button
                        className={`text-black px-3 py-2 mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setSortBy('name')}
                    >
                        Name
                    </button>
                    <button
                        className={`text-black px-3 py-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setSortBy('category')}
                    >
                        Category
                    </button>
                </div>
            </div>

            <div className='p-2 m-4 max-w-sm grid grid-cols-1 gap-5'>
                {sortedItems.map(item => (
                    <div key={item.id} className="p-4 rounded-md cursor-pointer" onClick={() => onItemSelect(item)}>
                        <Item itemObj={item} />
                    </div>
                ))}
            </div>
        </section>
    );
}
