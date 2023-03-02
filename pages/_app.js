// import '@/styles/global
import "../components/searchbar/search.css"
import "../components/navbar/nav.css"
import "../components/stripe/stripe.css"
import "../components/shopnow/shopnow.css"
import "../components/stripe2/stripe2.css"
import "../components/gamerworld/gamer.css"
import "./home/home.css"
import "../components/gamer2/gamer2.css"
import "../components/populersale/populer.css"
import "../components/topsalling/topsalling.css"
import "./products/allproduct.css"
import Cart from "./cart/Cart"
import HomePage from "../pages/home/HomePage";
import AllProduct from "./products/AllProduct"
import CheckOut from "./checkout/CheckOut"
import Navbar from "@/components/navbar/Navbar"
import SearchBar from "@/components/searchbar/SearchBar"
import Stripe from "@/components/stripe/Stripe"
//import {store} from './store'

export default function App() {
  return (
    
    <>
    <Navbar/>
    <SearchBar/>
    <Stripe/>

    
    {/* <HomePage/> */}
    {/* <AllProduct style={{backgroundColor:"red"}}/> */}
    {/* <CheckOut/> */}
    
    </>

      
      
  
  )
  
}
