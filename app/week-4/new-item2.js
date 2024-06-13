"use client"

import { useState } from "react";


export default function NewItem(){

    const [name, setName] =  useState(" ");
    const [quantity, setQuantity] =  useState("1");
    const [category , setCategory] =  useState("Produce");

    const handleSubmit = (item) => {
        item.preventDefault();
       
      
        const formData = {
            userName : name,
            userQuantity : quantity,
            userCategory : category,

        }
        alert(`Added Item:${formData.userName} , Quantity: ${formData.userQuantity} , Category: ${formData.userCategory}`);

      
    }

    const handleNameChange = (item) => {
        setName(item.target.value);
    }
    const handleQuantityChange = (item) => {
        setQuantity(item.target.value);
     
    }
    const handleCategoryChange = (item) => {
        setCategory(item.target.value);
    }
    

    return(
        <main className="flex justify-center w-full">
            <form onSubmit={handleSubmit} className="p-6 m-4 bg-slate-300 text-black max-w-sm w-full rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Item Name</label>
                    <input id="name" placeholder="Item Name" onChange={handleNameChange} value={name} className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans" required/>
                </div>
                
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input 
                        type="number" 
                        id="quantity" 
                        min="1" 
                        max="99" 
                        onChange={handleQuantityChange} 
                        value={quantity} 
                        className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label id="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <select 
                        id="category" 
                        onChange={handleCategoryChange} 
                        value={category} 
                        className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                        required
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

            
            

                <div className="flex justify-center">
                    <button 
                        type="submit"
                        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        +
                    </button>
                </div>
        </form>

        </main>
    )

}