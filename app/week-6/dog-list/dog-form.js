"use client"
import { useState } from "react";

export default function DogForm({closeFormFunc, onCreateDog}){

    let controlStyles = "block mb-4";
    let inputStyles = "block mt-1 p-1 w-full rounded-sm text-black bg-grey-100 focus:bg-white";

    const [dogId, setDogId] = useState(0);
    const [dogName, setDogName] = useState("");
    const [dogAge, setDogAge] = useState(0);

    const handleDogIdChange = (event) => setDogId(event.target.value);
    const handleDogNameChange = (event) => setDogName(event.target.value);
    const handleDogAgeChange = (event) => setDogAge(event.target.value);



    const handleSubmit = (event) => {
        // prevent default form functionality
        event.preventDefault();
        //create new dog object to be added
        let newDog = {
            id: dogId,
            name: dogName,
            age: dogAge
        }

        onCreateDog (newDog);
        //reset the form back to default states
        setDogId(0);
        setDogName("");
        setDogAge(0);
        //close the form modal
        closeFormFunc();
    }

    return(
        <div onClick={closeFormFunc} className="absolute h-full w-full flex items-center justify-center bg-gray-950/70">
            <div onClick={(event) => event.stopPropagation()} className="max-w-md p-8 rounded-lg shadow-md bg-white text-black">
                <h2>Add new Dog for Adoption</h2>
                <form onSubmit={handleSubmit}>
                    <div className={controlStyles}>
                        <label>ID: </label>
                        <input type="number" className={inputStyles} onChange={handleDogIdChange} value={dogId}/>
                    </div>
                    <div className={controlStyles}>
                        <label>Name: </label>
                        <input type="text" className={inputStyles} onChange={handleDogNameChange} value={dogName}/>
                    </div>
                    <div className={controlStyles}>
                        <label>Age: </label>
                        <input type="number" className={inputStyles} onChange={handleDogAgeChange} value={dogAge}/>
                    </div>
                    <button className="w-full bp-2 px-4 bg-blue-600 hover:bg-blue-500 rounded-md text-white">Add Dog</button>
                </form>
            </div>
        </div>
    );
}