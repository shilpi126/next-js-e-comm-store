import { width } from '@mui/system'
import React from 'react'
import GamerWorld from '../gamerworld/GamerWorld'
import ShopByBrand from '../shopbybrand/ShopByBrand'
import ShopNow from '../shopnow/ShopNow'
import Stripe2 from '../stripe2/Stripe2'


import TopSalling from '../topsalling/TopSalling'
import BestSaller from '../bestsaller/BestSaller'
import PopulerSale from '../populersale/PopulerSale'


import NewArrival from '../newarrival/NewArrival'
import PopulerSale2 from '../populersale2/PopulerSale2'
import Footer from '../footer/Footer'


export default function ProductsFeed({products}) {
  return (
    <div style={{backgroundColor:" lavender",  paddingTop:"50px"}}>

    {/* shopnow */}
        <ShopNow/>
        <Stripe2/>


    {/* mobile world */}
    <GamerWorld products={products}/>

    <ShopByBrand/>


    {/* topsalling products */}
    <TopSalling products={products}/>


    {/* best Saller */}
    <BestSaller/>


    {/* populer sales */}
    <PopulerSale products={products}/>


    {/* newarrival */}
    <NewArrival products={products}/>


    {/* populersale2 */}
    <PopulerSale2 products={products}/>

    <Footer/>
    </div>
  )
}
