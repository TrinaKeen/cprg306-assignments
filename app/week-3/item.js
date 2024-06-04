import React from 'react';

export default function StudentInfo() {
  const Item = ({ name, quantity, category }) => {
   return (
     <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-2">
       <div>
         <h2 className="text-lg font-semibold">{name}</h2>
         <p className="text-sm text-gray-600">{category}</p>
       </div>
       <span className="text-blue-500 font-bold">{quantity}</span>
     </li>
   );
 };
}

