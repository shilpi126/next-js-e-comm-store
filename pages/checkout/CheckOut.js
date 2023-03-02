// import React from 'react'

//import { useEffect, useState } from "react";

import React from 'react'


export async function getStaticProps(context){
  try{
    const response = await fetch('https://dummyjson.com/products/');
    console.log(response);
    const data = await response.json();
    console.log(data);
  
  
  return{
    props:{data:data,},
   
  }
    
  }

  catch(err){
    console.error("error", err);
  }

}


function CheckOut() {
  return (
    <div>CheckOut</div>
  )
}




export default CheckOut
