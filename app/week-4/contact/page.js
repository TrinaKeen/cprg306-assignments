"use client"

import { useState } from "react";

export default function Contact(){

    const [fullName, setFullName] =  useState("");
    const [phone, setPhone] =  useState("");
    const [email, setEmail] =  useState("");
    const [message, setMessage] =  useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //handle the form data
      
        const FormData = {
            userfullName : fullName,
            userPhone : phone,
            userEmail : email,
            userMessage : message,

        }
        alert(`Name:${FormData.userfullName} | Message: ${FormData.userMessage}`);

      
    }

    const handleNameChange = (event) => {
        setFullName(event.target.value);
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    return(
        <main>
           <h1 >Contact Form</h1>
           <form onSubmit={handleSubmit} className="p-5">
            <div className="">
                <label className="block" for="full_name">Full Name:</label>
                <input id="full_name" type="text" name="full_name" onChange={handleNameChange} value={fullName} className="text-black"/>
            </div>
                
            <div className="">
                <label className="block" for="phone">Phone Number:</label>
                <input onChange={handlePhoneChange} id="phone" type="tel" name="phone" value={phone}/>
            </div>

            <div className="">
                <label className="block" for="user_mail">Email:</label>
                <input onChange={handleEmailChange} id="user_mail" type="email" name="user_mail" value={email}/>
            </div>
            <div className="">
                <label className="block" for="message">Message:</label>
                <textarea  onChange={handleMessageChange} id="message" name="message" value={message}></textarea>
            </div>

            <div className="mt-5">
            {/* className= "text-white font-bold py-2 bg-blue-500 hover:bg-blue-700" type="submit" value="Contact Me!" */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Me!</button>
            </div>

           </form>

        </main>
    )
    
}