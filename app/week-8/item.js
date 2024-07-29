import React from 'react';

export default function Item({ itemObj, onSelect }) {
    let { name, quantity, category } = itemObj;

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <main className="rounded p-4 bg-slate-300 text-black" onClick={() => onSelect(itemObj)}>
            <h3><strong>{capitalizeFirstLetter(name)}</strong></h3>
            <p>Buy {quantity} in {capitalizeFirstLetter(category)}</p>
        </main>
    );
}
