// import '@/styles/global
import "../components/searchbar/search.css"
import "../components/navbar/nav.css"
import "../components/stripe/stripe.css"
import "../components/shopnow/shopnow.css"
import "../components/stripe2/stripe2.css"
import "../components/gamerworld/gamer.css"
import "../components/bestsaller/bestsaller.css"
import "../components/newarrival/new.css"
import "../components/populersale/populer.css"
import "../components/populersale2/populersale2.css"
import "../components/topsalling/topsalling.css"
import "./allproduct/allproduct.css"
import "../components/footer/footer.css"
import "../components/productsfeed/productsfeed.css"
//import {store} from './store'
import "../components/shopbybrand/brand.css"
import { store } from "@/app/store"
import { Provider } from "react-redux"
import "../pages/cart/cart.css"
import "../pages/checkout/checkout.css"

//import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
  )
 
}
