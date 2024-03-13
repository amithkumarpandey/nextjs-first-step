"use client"

import React, { useEffect, useState } from 'react'
import '../../../style.css';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '../../../../../utils/basePath';

function UpdateProduct(props) {

  const router = useRouter();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [company, setCompany] = useState();
  const [color, setColor] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const productId = props.params.productId;
      console.log("data", productId);
      let data = await fetch(`${API_BASE_URL}/api/product/${productId}`)
      data = await data.json();
      const { name, price, company, color, category } = data.data;
      setName(name);
      setPrice(price)
      setCategory(category);
      setColor(color);
      setCompany(company);
      return data;

    } catch (error) {
      console.log("Error while getting product details by product ID");
    }
    
  }

  const handleSubmit = async () => {
    const productId = props.params.productId;

    let data = await fetch(`${API_BASE_URL}/api/product/${productId}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, company, color, category })
    })

    data = await data.json();

    if (data.result) {
      alert('Product Updated successfully');
      router.push('/product/list-product')
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

export default UpdateProduct