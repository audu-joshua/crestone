"use client"
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

export default function ContactHero() {

  

  return (

<div className="bg-[url('/images/Chmobile.png')] md:bg-[url('/images/Chdesktop.png')] bg-cover bg-center">
<div className='h-screen px-3 md:px-6 lg:px-12 flex flex-col justify-end bg-black bg-opacity-15 gradient'>
        <div className=' w-full pb-4 md:pb-8 lg:pb-12'>
            <p className=' text-[#FFFFFF]'> Support</p>
        <h1 className=' text-3xl md:text-4xl lg:text-5xl text-white leading-[37px] md:leading-[45px] lg:leading-[63px] font-medium lg:font-[580]'>
          Help Center
        </h1>
        <p className=' text-[#FFFFFF]'> Everything you need to know about the business</p>
        </div>
        
      </div>
    </div>
  )
}

