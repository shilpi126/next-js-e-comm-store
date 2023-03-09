import Navbar from '@/components/navbar/Navbar'
import SearchBar from '@/components/searchbar/SearchBar'
import Stripe from '@/components/stripe/Stripe'
import React from 'react'
import { selectItems } from '@/slices/cart-slice';

import { useSelector } from 'react-redux';
import CartProduct from '@/components/cartproduct/CartProduct';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';

export default function Cart() {
  const cartitems = useSelector(selectItems);
  console.log(cartitems);
  const router = useRouter()

  return (
    <div>
        
          {/* navbar */}
          <Navbar/>
          
          {/* searchbar */}
          <SearchBar/>
          
          {/* stripe */}
          <Stripe/>

        
      <div>
        <h1 style={{textAlign:"center", fontFamily:"sans-serif"}}>YOUR CART</h1>
      </div>

      {/* <CartProduct items={items}/> */}
      <div>
        {cartitems.map((cartitem , index) => {
          return(
            // key={index}
            <h1>{cartitem.title}</h1>
            
          )
        })}
      </div>
      
    
      <button className='checkout-btn' onClick={() => router.push("/checkout/checkout")}>CheckOut Product</button>
     
  </div>
  )
}




{/* <div>
          
{items?.map((item, index) => (
  <div>
      <div className="cart-image-cont" >
      <img loading='lazy' src={item.images} alt={item.title} className="cart-image" />
      </div>
      <div className='cart-info'>
      
      <h6 >{item.description}</h6>
      <h4 >${item.price}</h4>
      </div> 
  </div>
))}





</div> */}


