import { Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export default function GamerWorld() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function callApi (){
        const response = await  fetch('https://dummyjson.com/products?limit=12')
        const data = await response.json();
        // console.log(data.products);
        setProducts(data.products)
        }
        callApi();
        
    }, []);
    
  
    return (

    <div className='card-container'>

    {products.map((product, index) => (
        <div className='card'>
            <img src={product.images[0]}  className="image" />
            <div className='info'>
            <Rating  readOnly precision={0.5} value={product.rating} className="rate"/>
            <h6 >{product.description}</h6>
            <h4 >${product.price}</h4>
            </div>
            <button className='add' >
            Add To Cart
            </button>
        </div>

    ))}

    </div>
    
    )
}










