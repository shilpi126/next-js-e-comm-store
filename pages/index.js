import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import SearchBar from '@/components/searchbar/SearchBar'
import Stripe from '@/components/stripe/Stripe'
import ProductsFeed from '@/components/productsfeed/ProductsFeed'
import { store } from '@/app/store'
import { Provider } from 'react-redux'


const inter = Inter({ subsets: ['latin'] })


export default function Home({products}) {
  return (
    <>
      <Head>
        <title>e-comm-store</title>
        
      </Head>
      
        <main>
          <Provider store={store}>
          {/* navbar */}
          <Navbar/>
          
          {/* searchbar */}
          <SearchBar/>
          
          {/* stripe */}
          <Stripe/>
          
          {/* products */}
        
          <ProductsFeed products={products.products} />
          </Provider>
          
          
        </main>
        
        
    </>
  )
}



export async function getStaticProps() {

  const response = await fetch('https://dummyjson.com/products')
  const products = await response.json()
  return {
    props:{
      products
    }
  }
}
