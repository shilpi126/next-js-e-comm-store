import { TruckIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import RefreshIcon from '@mui/icons-material/Refresh';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';


import React from 'react'

export default function Stripe2() {
  return (
    <div className='stripe2-container'>
        <div className='cont cont1'>
            <TruckIcon  color='red' className='stripe2-icon'/>
            <div className='text'>
            <div className='text1'>Free Shipping</div>
            <div className='text2'>When ordering over $100</div>
            </div>
        </div>

        <div className='cont cont2'>
        <ShieldCheckIcon color='red' className='stripe2-icon'/>
        <div className='text'>
            <div className='text1'>Free Return</div>
            <div className='text2'>Get Return within 30 days</div>
        </div>
        </div>

        <div className=' cont cont3'>
        <RefreshIcon  className='stripe2-icon '  />
        <div className='text'>
            <div className='text1'>Secure Payment</div>
            <div className='text2'>100% Secure Online Payment</div>
        </div>
        </div>

        <div className='cont cont4'>
        <EmojiEventsOutlinedIcon   className='stripe2-icon'/>
        <div className='text'>
            <div className='text1'>Best Quality</div>
            <div className='text2'>Original Product Guarenteed</div>
        </div>
        </div>
    </div>
  )
}
