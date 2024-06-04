import React from 'react';

export default function Item() {
  const Item = ({ name, quantity, category }) => {
   return (
     <li >
       <div>
         <h2 >{name}</h2>
         <p >{category}</p>
       </div>
       <span >{quantity}</span>
     </li>
   );
 };
}

