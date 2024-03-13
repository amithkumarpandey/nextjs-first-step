"use client";
import React, { useEffect, useState } from 'react'
import '../../../style.css';
import { API_BASE_URL } from '../../../../../utils/basePath';

const fetchUser = async (userId) => {
  const users = await fetch(`${API_BASE_URL}/api/user/${userId}`);
  const usersData = await users.json();
  return usersData;
}

function UpdateUser({ params }) {
  const { userId } = params;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const getUserDetails = async () => {
    const user = await fetchUser(userId);
    const { name, email, age } = user?.result[0];
    setName(name);
    setEmail(email);
    setAge(age);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleSubmit = async () => {
    try {
        const userDetails = await fetch(`${API_BASE_URL}/api/user/${userId}`, {
            method: "PUT",
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

export default UpdateUser