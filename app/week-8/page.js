"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import items from "./items.json";

function Page() {
  const [itemList, setItemList] = useState(items);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (item) => {
    const cleanedItem = item.name
      .split(",")[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "");
    setSelectedItemName(cleanedItem);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <NewItem setItemList={setItemList} />
        <ItemList items={itemList} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </div>
  );
}

export default Page;
