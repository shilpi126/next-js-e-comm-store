import React, { useEffect, useState } from 'react'
import { Rating } from '@mui/material';
import Image from 'next/image';

export default function TopSalling({products}) {


  return (

    <div className='topsalling-main'>
      <div style={{height:"50px", width:"90%"}}>
      <div style={{ fontSize:"40px", fontWeight:"bold" , height:"100%", width:"30rem", fontFamily:"sans-serif"}}>Top Salling Products</div>
      <div style={{marginLeft:"95%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"-3.1rem", textAlign:"center",justifyContent:"center",fontFamily:"sans-serif"}}>View More </div>
    </div>

    <div className='topsale-container'>
        {products?.slice(5,9).map((product) => (
          
          <div className='topsale-card'>
          <div className="topsale-image-cont" >
          <img loading='lazy' src={product.images[0]}  className="topsale-image" />
          </div>

          <div className='topsale-info'>
          <Rating  readOnly precision={0.5} value={product.rating} className="topsale-rate"/>
          <h6 >{product.description}</h6>
          <h4 >${product.price}</h4>
          <button className='topsale-add'>Add To Cart</button>
          </div>

          </div>

        ))}


              

   
      </div>

    

    
  </div>


       
   
  )
}
