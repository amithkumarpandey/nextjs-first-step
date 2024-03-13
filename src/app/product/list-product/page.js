"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../../../utils/basePath';

function ListProduct() {

    const [productData, setProductData] = useState([]);

    const listProduct = async () => {
        try {
            let data = await fetch(`${API_BASE_URL}/api/product`);
            data = await data.json();
            setProductData(data.data);
        } catch (error) {
            setProductData();
        }
    }

    useEffect(() => {
        listProduct();
    }, []);

    const handleDelete = async (productId) => {
        try {
            let result = await fetch(`${API_BASE_URL}/api/product/${productId}`, {
                method: "delete"
            });
            result = await result.json();
            if (result.result) {
                alert("Product Deleted successfully");
                listProduct();
            }
        } catch (error) {
            console.log("error", error);
            alert("Error during removing product");
        }
    }

  return (
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Company</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    productData.map((item, index) => {
                        return <tr key={`${item.name}${index}`}>
                            <td>{item.name}</td>
                            <td>{item.color}</td>
                            <td>{item.company}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link href={`/product/update/${item._id}`}>Edit</Link>
                                <button onClick={() => handleDelete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
                <tr></tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListProduct