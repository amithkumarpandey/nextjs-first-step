"use client"

import React, { useState } from 'react'
import './../../style.css';

const Product = () => {

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [company, setCompany] = useState();
    const [color, setColor] = useState();
    const [category, setCategory] = useState();

    const handleSubmit = async () => {
        let data = await fetch("http://localhost:3000/api/product", {
            method: "POST",
            body: JSON.stringify({ name, price, company, color, category })
        })

        data = await data.json();
        
        if (data.result) {
            alert('Product Added successfully');
        }
    }

    return (
        <div style={{ textAlign: "center", margin: "15px" }}>
            <h2>Add product</h2>
            <div className='product-input-container'>
                <input type='text' placeholder='Name' className='product-input-field' value={name} onChange={(event) => setName(event.target.value)} />
                <input type='text' placeholder='Price' className='product-input-field' value={price} onChange={(event) => setPrice(event.target.value)} />
                <input type='text' placeholder='Company' className='product-input-field' value={company} onChange={(event) => setCompany(event.target.value)} />
                <input type='text' placeholder='Color' className='product-input-field' value={color} onChange={(event) => setColor(event.target.value)} />
                <input type='text' placeholder='Category' className='product-input-field' value={category} onChange={(event) => setCategory(event.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Product;