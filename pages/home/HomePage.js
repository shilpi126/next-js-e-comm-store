import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import SearchBar from "components/searchbar/SearchBar"
import Stripe from '@/components/stripe/Stripe'
import ShopNow from '@/components/shopnow/ShopNow'
import Stripe2 from '@/components/stripe2/Stripe2'
import Gamer2 from "../../components/gamer2/Gamer2"
import GamerWorld from '@/components/gamerworld/GamerWorld'
import PopulerSale from "../../components/populersale/PopulerSale"
import TopSalling from "../../components/topsalling/TopSalling"

import Image from 'next/image'
import sale1 from "assets/banner-2.png"
import sale2 from "assets/banner-3.png"
import brand1 from "assets/brand-1.png"
import brand2 from "assets/brand-2.png"
import brand3 from "assets/brand-3.png"
import brand4 from "assets/brand-4.png"
import brand5 from "assets/brand-5.png"

import brand6 from "assets/brand-7.png"
import brand7 from "assets/brand-8.png"


import brand8 from "assets/brand-11.png"
import brand9 from "assets/brand-12.png"

import bests1 from "assets/saller-1.png"
import bests2 from "assets/saller-2.png"
import bests3 from "assets/saller-3.png"
import bests4 from "assets/saller-4.png"
import bests5 from "assets/saller-5.png"
import bests6 from "assets/saller-6.png"

import ads1 from "assets/ads-1.png"
import ads2 from "assets/ads-2.png"
import ads3 from "assets/ads-3.png"
import ads4 from "assets/ads-4.png"

function HomePage() {
  return (
    <>
    <div style={{backgroundColor:"#f2f2fc"}} >

   
     <ShopNow/>
    <Stripe2/> 
    <div style={{height:"50px", width:"90%",marginLeft:"70px", marginRight:"70px",}}>
    <div style={{ fontSize:"40px", fontWeight:"20px" , height:"100%", width:"15rem"}}>Games World</div>
    <div style={{marginLeft:"88%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"-3.1rem", textAlign:"center",justifyContent:"center"}}>View More </div>
    </div>
    <GamerWorld/>

   {/* brand */}
    <div className='brand'>
    <div  style={{ fontSize:"40px", fontWeight:"20px" , height:"15%", width:"100%"}}>
          Shop by Brand
    </div>
    <div className='brand-img'>
    <div className='img'>
    <Image  src={brand1}  className="brandimg"/>
    </div>
    <div className='img'>
    <Image src={brand2}  className="brandimg"/>
    </div>
    <div className='img'>
    <Image src={brand3}  className="brandimg"/>
    </div>
    <div className='img'>
    <Image src={brand4}  className="brandimg"/>
    </div>
    <div className='img'>
    <Image src={brand5} className="brandimg" />
    </div>
    <div className='img'>
    <Image src={brand6}   className="brandimg"/>
    </div>
    <div className='img'>
    <Image src={brand7}  className="brandimg"/>
    </div>
    <div className='img'>
    <Image src={brand8}  className="brandimg"/>
    </div>
    <div className='img'>
    <Image src={brand9}  className="brandimg"/>
    </div>
    <div className='img'>
    <Image src={brand1}  className="brandimg"/>
    </div>
    <div className='img'>
    <Image src={brand2}  className="brandimg"/>
    </div>
    <div className='img'>
    <Image src={brand3} className="brandimg"/>
    </div>

    </div>
    </div>


{/* sale */}
    <div className='sale-cont'>
        
        <Image className='saleimg i1' src={sale1}/>
        
        <Image className='saleimg i2' src={sale2}/>
    </div>


    {/* Top Selling Products */}
    <div style={{height:"50px", width:"90%",marginLeft:"70px", marginRight:"70px",}}>
    <div style={{ fontSize:"40px", fontWeight:"20px" , height:"100%", width:"25rem"}}>Top Treanding Sale</div>
    <div style={{marginLeft:"88%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"-3.1rem", textAlign:"center",justifyContent:"center"}}>View More </div>
    </div>
  <TopSalling/>




    {/* Best Seller */}
    <div className='best'>
    
    <div>
    <div style={{height:"50px", width:"90%",marginLeft:"70px", marginRight:"70px",}}>
    <div style={{ fontSize:"40px", fontWeight:"20px" , height:"100%", width:"15rem", marginBottom:"-2rem"}}>Best  Saller</div>
    <div style={{marginLeft:"88%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"1rem", textAlign:"center",justifyContent:"center"}}>View More </div>
    </div>
 

    <div className='saller'>

      <div className='saller-item'>
        <Image className='sl' src={bests1}/>
        <p >Shopno BD</p>
      </div>
      <div className='saller-item'>
        <Image  className='sl' src={bests2}/>
        <p>Shopno BD</p>
      </div>
      <div className='saller-item'>
        <Image  className='sl' src={bests3}/>
        <p>Shopno BD</p>
      </div>
      <div className='saller-item'>
        <Image  className='sl' src={bests4}/>
        <p>Shopno BD</p>
      </div>
      <div className='saller-item'>
        <Image  className='sl' src={bests5}/>
        <p>Shopno BD</p>
      </div>
      <div className='saller-item'>
        <Image  className='sl' src={bests6}/>
        <p>Shopno BD</p>
      </div>
    </div>
    </div>

  





    </div>




    {/* ads */}

    <div className='ads'>
      <Image className='ad1' src={ads1}/>
      <Image className='ad2' src={ads2}/>


    </div>




    <div style={{height:"50px", width:"90%",marginLeft:"70px", marginRight:"70px",}}>
    <div style={{ fontSize:"40px", fontWeight:"20px" , height:"100%", width:"15rem"}}>Games World</div>
    <div style={{marginLeft:"88%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"-3.1rem", textAlign:"center",justifyContent:"center"}}>View More </div>
    </div>
    <GamerWorld/>


 {/* ads3 */}

 <Image  src={ads3} style={{width:"90%", marginLeft:"70px", marginRight:"70px" , marginBottom:"20px"}}/>



    <div style={{height:"50px", width:"90%",marginLeft:"70px", marginRight:"70px",}}>
    <div style={{ fontSize:"40px", fontWeight:"20px" , height:"100%", width:"15rem"}}>Games World</div>
    <div style={{marginLeft:"88%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"-3.1rem", textAlign:"center",justifyContent:"center"}}>View More </div>
    </div>
    <Gamer2/>


      {/* ads4 */}

      <Image  src={ads4} style={{width:"90%", marginLeft:"70px", marginRight:"70px" , marginBottom:"20px"}}/>

 

      {/* populer sale */}


      <div style={{height:"50px", width:"90%",marginLeft:"70px", marginRight:"70px",}}>
    <div style={{ fontSize:"40px", fontWeight:"20px" , height:"100%", width:"15rem"}}>Games World</div>
    <div style={{marginLeft:"88%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"-3.1rem", textAlign:"center",justifyContent:"center"}}>View More </div>
    </div>
    <PopulerSale/>


    <div className='email-cont'>
      <h1> Get 20% Off Discount Coupon</h1>
      <div className='email-item'>
        <input type="email" placeholder='email...' />
        <button className='email-btn'>Email</button>
      </div>
    </div>

  </div>

    
    </>
    

   
  )
}

export default HomePage