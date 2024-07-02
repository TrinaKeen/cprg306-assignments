"use client"

import { useState } from "react";
import dogData from'./dogs.json';
import DogList from "./dog-list";
import DogForm from "./dog-form";
import { Sedan } from "next/font/google";

export default function DogPage(){

    const [dogList, setDogList] = useState( dogData.map((dog) => ({...dog})));

    //Let dogArray = dogData.map((dog) => ({...dog}));

    const[isDogFormOpen, setDogFormOpen] = useState(false);

    const handleCreateDog = (newDog) => {
        setDogList([...dogList, newDog]);
    }

    const openDogForm = () => setDogFormOpen(true) ;
    const closeDogForm = () => setDogFormOpen(false);

    return(
      <main>
        <h1>Dogs for Adoption</h1>
        {
            isDogFormOpen && (
                <DogForm closeFormFunc={closeDogForm} onCreateDog={handleCreateDog}/>
            )
        }
       
        <DogList listOfDogs={dogList}/>
        <div>
            <button onClick={openDogForm}>Add Dog for Adoption</button>
        </div>
      </main>
    );
}