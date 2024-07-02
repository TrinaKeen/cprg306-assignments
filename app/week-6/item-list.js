"use client";

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name');
    const [groupByCategory, setGroupByCategory] = useState(false);

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

    // Group items by category
    const groupedItems = sortedItems.reduce((groups, item) => {
        const category = item.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(item);
        return groups;
    }, {});

    // Get sorted categories
    const sortedCategories = Object.keys(groupedItems).sort();

    return (
        <section>
            <div className='flex mb-3 px-10 py-5 bg-grey-200'>
                <div className='flex-1'>
                    <label>Sort by: </label>
                    <button
                        className={`text-black px-3 py-2 mr-2 ${sortBy === 'name' && !groupByCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => { setSortBy('name'); setGroupByCategory(false); }}
                    >
                        Name
                    </button>
                    <button
                        className={`text-black px-3 py-2 mr-2 ${sortBy === 'category' && !groupByCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => { setSortBy('category'); setGroupByCategory(false); }}
                    >
                        Category
                    </button>
                    <button
                        className={`text-black px-3 py-2 ${groupByCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setGroupByCategory(true)}
                    >
                        Group by Category
                    </button>
                </div>
            </div>

            <div className='p-2 m-4  max-w-sm grid grid-cols-1 gap-5'>
                {groupByCategory ? (
                    sortedCategories.map(category => (
                        <div key={category} className="mb-4">
                            <h2 className="text-xl font-bold">{capitalizeFirstLetter(category)}</h2>
                            <div className="grid grid-cols-1 gap-2">
                                {groupedItems[category].map(item => (
                                    <div key={item.id} className="p-4  rounded-md">
                                        <Item itemObj={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    sortedItems.map(item => (
                        <Item key={item.id} itemObj={item} />
                    ))
                )}
            </div>
        </section>
    );
}
