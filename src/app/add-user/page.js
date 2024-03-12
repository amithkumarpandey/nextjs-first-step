"use client"

import React, { useState } from "react";
import '../style.css';

export default function AddUser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async () => {
        try {
            const userDetails = await fetch("http://localhost:3000/api/user", {
                method: "POST",
                body: JSON.stringify({ name, email, age })
            })
            if (userDetails.status === 201) {
                alert("User Added successfully");
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <div className="add-user">
            <h1>Add user</h1>
            <input type="text" value={name} placeholder="Enter name" className="input-field" onChange={(event) => setName(event.target.value)} />
            <input type="text" value={email} placeholder="Enter email" className="input-field" onChange={(event) => setEmail(event.target.value)} />
            <input type="text" value={age} placeholder="Enter age" className="input-field" onChange={(event) => setAge(event.target.value)} />
            <button className="btn" onClick={handleSubmit}>Add user</button>
        </div>
    )
}