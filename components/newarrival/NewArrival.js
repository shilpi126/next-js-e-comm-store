import { Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ads4 from "../../assets/ads-4.png"



export default function NewArrival({products}) {
 
    
  
    return (



        <div className='newarrival-main'>
            <div style={{height:"50px", width:"90%"}}>
            <div style={{ fontSize:"40px",fontWeight:"bold" , height:"100%", width:"15rem",fontFamily:"sans-serif"}}>New Arrival</div>
            <div style={{marginLeft:"95%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"-3.1rem", textAlign:"center",justifyContent:"center",fontFamily:"sans-serif"}}>View More </div>
            </div>

            <div className='newarrival-container'>
                {products.slice(0,12).map((product) => (
                          <div  className='newarrival-card'>
                          <img loading='lazy' src={product.images[0]} alt={product.title} className="newarrival-image"/>
                          <div className='newarrival-info'>
                          <Rating  readOnly  precision={0.5} value={product.rating} className="rate"/>
                          <h6>{product.description}</h6>
                          
                          <h4 >${product.price}</h4>
                          </div>
                          <button className='newarrival-add'>Add To Cart</button>
                          </div>
                ))}
            </div>

            <Image src={ads4} className="ad4"/>
        </div>

   

  
    
    )
}










