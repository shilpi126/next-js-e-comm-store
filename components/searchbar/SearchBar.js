import React from 'react'
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import Image from 'next/image';
import logo from "../../assets/logo2.png"
import {ShoppingBagIcon} from '@heroicons/react/24/outline'
import {HeartIcon} from '@heroicons/react/24/outline'
import {UserIcon} from '@heroicons/react/24/outline'
import {ArrowPathIcon} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import {Bars3CenterLeftIcon} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from '@heroicons/react/24/outline'
import { display } from '@mui/system';
import { valueToPercent } from '@mui/base';
import Link from 'next/link';

import Allproduct from '@/pages/allproduct/allproduct';
import { useRouter } from 'next/router';
import { selectItems } from '@/slices/cart-slice';
import { useDispatch, useSelector } from 'react-redux';
//import { fetchAllCategories } from '@/slices/categories-slice';



export default function SearchBar() {
    
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(" ")
    const [filterData, setFilterData] = useState([])
    const [products, setProducts] = useState([])
    //const [selectedCategory, setSelectedCategory] = useState(" ")
    const router = useRouter();
    //this is pull the items from global store;
    const items = useSelector(selectItems);
    //console.log(items);

    //const categories =  useSelector((state) => state.categories.value);
     const dispatch = useDispatch();





useEffect(() => {
    async function callApi (){
    const response = await  fetch('https://dummyjson.com/products/')
    const data = await response.json();
    // console.log(data.products);
    setProducts(data.products)
  
    }
    callApi();
    }, []);



const handleProdFilter = (e) => {
  
    setSearchTerm(e.target.value);
    const newFilter = products.filter((product) => {
        return(
        
            product.title.toLowerCase().includes(searchTerm.toLowerCase())

        )
    });
    setFilterData(newFilter);
}  


const handleCateFilter = (e) => {
   
    setSearchTerm(e.target.value);
    const newFilter = products.filter((product) => {
        return(
            
        
            product.category.toLowerCase().includes(searchTerm.toLowerCase())

        )
    });
    setFilterData(newFilter);
}











return (
    <>
    <div className='search-container'>
        <Image className='img' src={logo} alt='logo'
        style={{
            marginTop:"20px",
            height:"46px",
            width:"162px"
            }}

            onClick={() => router.push("/")}
            />



        <div className='search'>
            
                        <div className='search-product'>
                            <div className='search-prod' > 
                                <input 
                                
                                autoComplete={true}
                                type="search"
                                placeholder='Search Products...'
                                onChange={handleProdFilter}
                                />
                            </div >
                        
                            
                            <div className="ul-search-cont">

                            <ul className='cate-ul-search'>

                                {filterData.map((val) => (
                                        
                                        <li>{val.title}</li>
                                    
                                ))}
                                </ul>
                            </div>
                            
                        </div >

                        
                        <div  className='filter-cate-all'>
                            <div className='text-all-search'>
                                <input
                                type="search"
                                placeholder='All Ctegories'
                                
                                onChange={handleCateFilter}
                                />
                            
                            </div>

                        <div className='ul-list-cont'>
                            <ul className='ul-all-search'>
                                {
                                filterData.map((cate) => {
                                    
                                        return(
                                            
                                            // {category === category ? " " :  <li>{cate.category }</li>}
                                            <li >{cate.category }</li>
                                            
                                            
                                        )
                                    
                                    
                                    })
                            }

                            </ul>
                            </div>
                            {/* <div className='icon-all-search'><ChevronDownIcon/></div> */}
                        
                            
                        </div> 
                    
                        
                        <button  className='search-btn'>Search</button>
                        
        </div> 
            



        {/* icons */}

        <div className='icons'>
            <div className='a'>
            <div className='abc num'>
            <div className='number'>15</div>
            </div>
            <ArrowPathIcon  className='icon aero'  />
            </div>

            <div className='a'>
            <div className='abc num'>
            <div className='number '>10</div>
            </div>
            
            <HeartIcon className='icon heart'/>
            </div>

            <div className='a shoppingIcon'  onClick={() => router.push("/cart/cart")}>
            <div className='abc '>
            <div className='number'>{items.length}</div>
            </div>
            
            <ShoppingBagIcon className='icon shopping'/>
            </div>
            
            
            <UserIcon  className='icon user'/>
        </div>


      
        
    </div>
 {/* <AllProduct filterData={filterData}  style={{backgroundColor:"red"}}/>    */}
 <Allproduct  filterData={filterData}/>
    </>
      
    )
}




