import Image from 'next/image'
import React from 'react'
import mobile from "../../assets/mobile.jpg"
import banner1 from"../../assets/banner-1.png"
import banner2 from "../../assets/banner-2.png"
import banner3 from "../../assets/banner-3.png"

export default function ShopNow() {
  return (
    <div className='shopnow-container'>
        <div className='singleimg'>
            
            <Image src={banner1} className="img1"/>
        </div>
        <div className='doubleimg'>
            <Image src={banner2} className="img2"/>
            <Image src={banner3} className="img3"/>
        </div>
    </div>
  )
}
