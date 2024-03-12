import Link from 'next/link'
import React from 'react'

function Product() {
  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", margin: "15px" }}>
        <h1>Product Page</h1>
        <Link href="/product/add-product">Add Product</Link>
        <Link href="/product/list-product">List Product</Link>
    </div>
  )
}

export default Product