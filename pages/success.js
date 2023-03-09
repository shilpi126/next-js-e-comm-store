import Navbar from '@/components/navbar/Navbar'
import SearchBar from '@/components/searchbar/SearchBar'
import Stripe from '@/components/stripe/Stripe'
import React from 'react'

export default function success() {
  return (
    <div>

         {/* navbar */}
         <Navbar/>
          
          {/* searchbar */}
          <SearchBar/>
          
          {/* stripe */}
          <Stripe/>
        <h1 style={{marginTop:"15rem"}}>YOUR ORDER SUCCESSFULLY PLACED</h1>
    </div>
  )
}
