//import { Category } from '@mui/icons-material'
import { Rating } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/slices/cart-slice';


function GamerWorld({products}) {

  
  const dispatch = useDispatch();

  const addItemsToBasket = () => {
    const product = products;
    
      //Sending the product as an action to the Redux store...
    dispatch(addToBasket(product))
  }




  return (

    <div className='gamer-main'>
    <div style={{height:"50px", width:"90%"}}>
        <div style={{ fontSize:"40px", fontWeight:"bold", height:"100%", width:"15rem",fontFamily:"sans-serif"}}>Mobile World</div>
        <div style={{marginLeft:"95%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"-3.1rem", textAlign:"center",justifyContent:"center",fontFamily:"sans-serif"}}>View More </div>
    </div>
   
    <div className='gamer-container'>
      

      {products?.slice(0,4).map((product) => {
        return(
           
            <div  className='card'>
                <img loading='lazy' src={product.images[0]} alt={product.title} className="image"/>
                <div className='info'>
                <Rating  readOnly  precision={0.5} value={product.rating} className="rate"/>
                <h6>{product.description}</h6>
                
                <h4 >${product.price}</h4>
                </div>
                <button onClick={addItemsToBasket} className='add'>Add To Cart</button>
            </div>
        )
      } )

      }
</div>

</div>



    // <div  className='card'>
    //     <img loading='lazy' src={image} alt={title} className="image"/>
    //     <div className='info'>
    //     <Rating  readOnly  precision={0.5} value={rating} className="rate"/>
    //     <h6>{description}</h6>
        
    //     <h4 >${price}</h4>
    //     </div>
    //     <button className='add'>Add To Cart</button>
    // </div>



 
  )
}

export default GamerWorld