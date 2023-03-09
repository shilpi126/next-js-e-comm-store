import React from 'react'
import { Rating } from '@mui/material';
import Image from 'next/image';

import ads3 from "../../assets/ads-3.png"

export default function PopulerSale({products}) {

  





  return (

    <div className='populer-main'>
        <div style={{height:"50px", width:"90%"}}>
          <div style={{ fontSize:"40px", fontWeight:"bold" , height:"100%", width:"30rem",fontFamily:"sans-serif"}}>Populer Sale</div>
          <div style={{marginLeft:"95%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"-3.1rem", textAlign:"center",justifyContent:"center",fontFamily:"sans-serif"}}>View More </div>
        </div>

      <div className='populer-container'>

        {products.slice(9,13).map((product) => (
           <div  className='populer-card'>
          <img loading='lazy' src={product.images[2]} alt={product.title} className="populer-image"/>
          <div className='populer-info'>
          <Rating  readOnly  precision={0.5} value={product.rating} className="rate"/>
          <h6>{product.description}</h6>
          
          <h4 >${product.price}</h4>
          </div>
          <button className='add'>Add To Cart</button>
          </div> 
        ))}

     



      </div>

      
    <Image  src={ads3} className="ad3"/>
    </div>



   
    
  )
}
