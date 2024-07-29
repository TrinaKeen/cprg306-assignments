"use client";
import Item from "./item";

function ItemList({ items, onItemSelect }) {
  return (
    <div>
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
