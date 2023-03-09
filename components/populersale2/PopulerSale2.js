import React from 'react'

export default function PopulerSale2({products}) {
  return (
    <div className='populersale-main'>
      <div style={{height:"50px", width:"90%"}}>
          <div style={{ fontSize:"40px", fontWeight:"bold" , height:"100%", width:"30rem", fontFamily:"sans-serif"}}>Populer Sale 2</div>
          <div style={{marginLeft:"95%" ,paddingTop:"7px", fontSize:"25px", fontWeight:"20px", width:"10rem", height:"90.5%", marginTop:"-3.1rem", textAlign:"center",justifyContent:"center",fontFamily:"sans-serif"}}>View More </div>
      </div>
    
    <div className='populersale2-container'>

      {products?.slice(0,12).map((product) => (
            <div className='populersale2-card'>
            <div className="populersale2-image-cont" >
            <img loading='lazy' src={product.images[0]}  className="populersale2-image" />
            </div>
            <div className='populersale2-info'>
            
            <h6 >{product.description}</h6>
            <h4 >${product.price}</h4>
            </div>
            </div>
      ))}

    
    


    </div>

    </div>
  )
}
