import React from 'react'
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react'

export default function PopulerSale() {

     const [populerSale, setPopulerSale] = useState([]);

    useEffect(() => {
        async function callApi (){
        const response = await  fetch('https://dummyjson.com/products?limit=12')
        const data = await response.json();
        // console.log(data.products);
        setPopulerSale(data.products)
        }
        callApi();
        
    }, []);



  return (

    <div className='populer-container'>

    {populerSale.map((value, index) => (
        <div className='populer-card'>
            <div className="populer-image-cont" >
            <img src={value.images[0]}  className="populer-image" />
            </div>
            <div className='populer-info'>
            {/* <Rating  readOnly precision={0.5} value={product.rating} className="rate"/> */}
            <h6 >{value.description}</h6>
            <h4 >${value.price}</h4>
            </div>
            {/* <button className='add'>Add To Cart</button> */}
        </div>

    ))}

    </div>

    
  )
}
