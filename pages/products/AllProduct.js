import React from 'react'
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react'
//import FilterData from "../../components/searchbar/SearchBar"

export default function AllProduct({filterData}) {
    const [getProduct, setGetProduct] = useState([])

    useEffect(() => {
        async function callApi (){
        const response = await  fetch('https://dummyjson.com/products/')
        const data = await response.json();
        // console.log(data.products);
        setGetProduct(data.products)
        }
        callApi();
        
    }, []);

  
    // console.log(product);

  return (
    <>
    <h1 className='all-prod'>Products</h1>
    <div className='getall-card-container'>
        
    {filterData?.map((item, index) => (
        <div className='getall-card'>
            key={index}
            <img src={item.images[0]}  className="getall-image" />
            <div className='getall-info'>
            <Rating  readOnly precision={0.5} value={item.rating} className="getall-rate"/>
            <h6 >{item.description}</h6>
            <h4 >${item.price}</h4>
            </div>
            <button className='getall-add'>Add To Cart</button>
        </div>

    ))}

     </div>

   </>

 
  )
}



