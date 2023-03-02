import React, { useEffect, useState } from 'react'
import { Rating } from '@mui/material';
import Image from 'next/image';
export default function TopSalling() {

    const [topSale, setTopSale] = useState([]);

    useEffect(() => {
        async function callApi (){
        const response = await  fetch('https://dummyjson.com/products?limit=4')
        const data = await response.json();
        // console.log(data.products);
        setTopSale(data.products)
        }
        callApi();
        
    }, []);


  return (
 

    <div className='topsale-container'>

    {topSale.map((value, index) => (
        <div className='topsale-card'>
            <div className="topsale-image-cont" >
            <img src={value.images[0]}  className="topsale-image" />
            </div>
            <div className='topsale-info'>
            <Rating  readOnly precision={0.5} value={value.rating} className="topsale.rate"/>
            <h6 >{value.description}</h6>
            <h4 >${value.price}</h4>
            <button className='topsale-add'>Add To Cart</button>
            </div>
            
        </div>

    ))}

    </div>
  )
}
