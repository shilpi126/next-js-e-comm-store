import React, { useEffect, useState } from 'react'
import {Bars3CenterLeftIcon} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from '@heroicons/react/24/outline'
import { display } from '@mui/system';
import Link from 'next/link';

export default function Stripe() {
    const [categories, setCategories] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        async function callApi (){
        const response = await  fetch('https://dummyjson.com/products/categories')
        const data = await response.json();
        
        setCategories(data)
        }
        callApi();

        console.log(categories);
        
    }, []);


    const AllCategories = () =>{
        return(
        <div className="cate">
            {categories.map((category) => (
                <ul>
                    
                    <li className='cate-text'>{category} </li>
                    
                </ul>
            ))}
        </div>
        )
    }



    return (
    
        <div className='stripe-container'>
                    <div   onClick={(e) => setOpen(!open)} >
                        <div className='all-categories-title' >
                        <div className='bars3icon'>
                        
                        <Bars3CenterLeftIcon />
                        </div>
                        <div className='all'> 
                        All Categories
                        </div>
                        <div className='downicon'>
                        <ChevronDownIcon />
                        </div>

                        </div >
                            <ul className='abcd'>
                                <li className='all-categories'>
                                    {open && (<AllCategories/>)}
                                </li>
                            </ul>
                        </div>

            
                <ul className='list-items  '>
                    
                    <li className='details'>HomePage</li>
                    <li className='details'>Shope</li>
                    <li className='details'>Pages</li>
                    <li className='details'>About</li>
                    <li className='details'>Blog</li>
                    <li className='details'>Contect</li>
                    
                    <button className='stripe-btn details' >Bacome a Seller</button>
                    
                </ul> 
                
            
        </div>
    
    )
}
