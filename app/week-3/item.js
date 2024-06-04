import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm">
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-blue-100" > Buy {quantity} in {category} </p><br></br>
      </div> 
    </li>
    
  );
};

export default Item;
