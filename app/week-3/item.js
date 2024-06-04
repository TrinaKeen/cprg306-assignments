import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-2">
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{category}</p>
      </div>
      <span className="text-blue-200 font-bold">{quantity}</span>
    </li>
  );
};

export default Item;
