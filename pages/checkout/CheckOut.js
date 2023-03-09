import Navbar from '@/components/navbar/Navbar'
import SearchBar from '@/components/searchbar/SearchBar'
import Stripe from '@/components/stripe/Stripe'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'

export default function CheckOut() {
  const[firstname, setFirstname] = useState(" ")
  const [lastname, setLastname] = useState(" ")
  const [email, setEmail] = useState(" ")



  // async function handleSubmit(e){
  //   e.preventDefault();

  //   try{

  //     await axios.post("http//localhost:3000/api/v1/checkout/checkout", {
  //       firstname,lastname,email
  //     })

  //   }catch(err){
  //   console.log(err);
  //   }



    
  //  }



  return (
    <div>
        {/* navbar */}
        <Navbar/>
          
          {/* searchbar */}
          <SearchBar/>
          
          {/* stripe */}
          <Stripe/>

          <div className='checkout-container'>
            <h1>Check Out</h1>
            <form >
              <label>First Name*</label>
              <input type="text" placeholder='Fisrt Name'
               className='demodata'
               onChange={(e) => {setFirstname(e.target.value)}}
               />
              <label>Last Name*</label>
              <input type="text" placeholder='Last Name' 
              className='demodata'
              onChange={(e) => {setLastname(e.target.value)}}
              />
              <label>Email*</label>
              <input type="email" placeholder='Email' 
              className='demodata'
              onChange={(e) => {setEmail(e.target.value)}}
              />
              <label>Phone Number*</label>
              <input type="number" placeholder='012' className='demodata'/>
              <label>Country*</label>
              <input type="text" placeholder='Country Name' className='demodata'/>
              <label>Address*</label>
              <input type="text" placeholder='Address' className='demodata'/>
              <label>*Town/City</label>
              <input type="text" placeholder='Town/City' className='demodata'/>
              <label>Last Name*</label>
              <input type="number" placeholder='Postcode/ZIP'className='demodata'/>
              <Link href="/success">
              <button className='placeorder-btn'>Place Order Now</button>
              </Link>
            </form>
          </div>



    </div>
  )
}


