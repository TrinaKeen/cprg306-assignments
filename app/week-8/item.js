import React from 'react';

function Item({ item, onSelect }) {
    return (
      <li onClick={() => onSelect(item)}>
        {item.name}
      </li>
    );
  }
  
  export default Item;
  