import { Heart, Home } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const DesktopSidebar = () => {
  return (
    <div className='P-3 md:p-10 border-r min-h-screen w-24 md:w-96 hidden sm:block'>
        <div className='flex flex-col gap-20 sticky top-10 left-0'>
            <div className='w-full'>
                <img src='/logo.svg' alt='logo' className='hidden md:block'/>
                <img src='/mobile-logo.svg' alt='logo' className='block md:hidden'/>
            </div>
            <ul className='flex flec-col items-center md:items-start gap-8'>
                <Link to={"/"} className='flex gap-1'>
                    <Home size={"24"}/>
                    <span className='font-bold hidden md:block'>Home</span>
                </Link>
                <Link to={"/favourites"} className='flex gap-1'>
                    <Heart size={"24"}/>
                    <span className='font-bold hidden md:block'>Favourites</span>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default DesktopSidebar;