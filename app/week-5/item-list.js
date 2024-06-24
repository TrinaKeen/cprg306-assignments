"use client"
import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
    // Map the JSON data to an array
    let itemArray = itemsData.map((item) => ({ ...item }));

    const [sortBy, setSortBy] = useState('name');

    // Sort the items based on the sortBy state variable
    itemArray.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <section >
            <div className='flex mb-3 px-10 py-5 bg-grey-200'>
                <div className='flex-1'>
                    <label >Sort by:    </label>
                    <select className='text-black' onChange={(event) => setSortBy(event.target.value)} value={sortBy} >
                        <option value="name">Name</option>
                        <option value="category">Category</option>
                    </select>
                </div>
            </div>

            <div className='p-2 m-4 bg-slate-900 max-w-sm grid grid-cols-1 gap-5'>
                {itemArray.map((item) => (
                    <Item key={item.id} itemObj={item} />
                ))}
            </div>
        </section>
    );
}
