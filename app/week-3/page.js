import React from 'react';
import ItemList from './item-list';
import Item from './item';

export default function Page() {
    return (
        <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <br/>
        <ItemList />
      </main>
  );
};