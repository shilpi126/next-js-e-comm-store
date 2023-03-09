import React from 'react'
import brand1 from "../../assets/brand-1.png"
import brand2 from "../../assets/brand-2.png"
import brand3 from "../../assets/brand-3.png"
import brand4 from "../../assets/brand-4.png"
import brand5 from "../../assets/brand-5.png"

import brand6 from "../../assets/brand-7.png"
import brand7 from "../../assets/brand-8.png"


import brand8 from "../../assets/brand-11.png"
import brand9 from "../../assets/brand-12.png"
import Image from 'next/image'
import sale1 from "../../assets/banner-2.png"
import sale2 from "../../assets/banner-3.png"

function ShopByBrand() {
  return (
 
    <>
    <div className='brand'>
    <div  style={{ fontSize:"40px", fontWeight:"40px" , height:"15%", width:"100%",fontFamily:"sans-serif"}}>
        Shop by Brand
    </div>

    <div className='brand-img-cont'>
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

      <div  className="sale-img-cont">
      
        <Image src={sale1} className="sale-img"/>
        <Image src={sale2} className="sale-img"/>
    
    </div>

</>
    
  )
}

export default ShopByBrand