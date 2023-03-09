import React from 'react'

import ads1 from "../../assets/ads-1.png"
import ads2 from "../../assets/ads-2.png"
import bests1 from "../../assets/saller-1.png"
import bests2 from "../../assets/saller-2.png"
import bests3 from "../../assets/saller-3.png"
import bests4 from "../../assets/saller-4.png"
import bests5 from "../../assets/saller-5.png"
import bests6 from "../../assets/saller-6.png"
import Image from 'next/image'

function BestSaller() {
  return (
    <div>
    <div className='best'>
    
    <div>
    <div style={{height:"50px", width:"90%",marginLeft:"70px", marginRight:"70px",marginTop:"20px"}}>
    <div style={{ fontSize:"40px", fontWeight:"bold" , height:"100%", width:"15rem",fontFamily:"sans-serif"}}>Best  Saller</div>
    <div style={{marginLeft:"88%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"-1.5rem", textAlign:"center",justifyContent:"center"}}>View More </div>
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
</div>
  )
}

export default BestSaller