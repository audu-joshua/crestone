import React from 'react'
import { BsArrow90DegLeft } from 'react-icons/bs'
import {BsArrowUpRight } from 'react-icons/bs'

export default function Listing() {
  return (
    <div className='bg-white py-8 text-black px-3 md:px-6 lg:px-12'>
        <div className='flex gap-4 py-5 items-center'>
          <div className='p-1 h-3 w-3 rounded-full bg-red-600'></div>
          <h2> Listings </h2>
        </div>

    <div className='grid gap-4'>
        <div className=' flex justify-between border-b border-solid border-zinc-400 pb-3'>
            <div className='grid w-[80%]'>
                <h3 className=' text-black font-semibold text-3xl'> Single-Family 
                Housing </h3>
                <p className=' text-red-500 py-1 font-semibold'> 20+ Units Available </p>
            </div>

            <div className=' w-[20%] flex justify-end'>
            <div className=' rounded-full p-3 border h-fit border-solid border-black' >
                <BsArrowUpRight className=' text-2xl'/>
            </div>
            </div>
        </div>

        <div className=' flex justify-between border-b border-solid border-zinc-400 pb-3'>
            <div className='grid w-[80%]'>
                <h3 className=' text-black font-semibold text-3xl'> Multi-Family 
                Housing </h3>
                <p className=' text-red-500 py-1 font-semibold'> 20+ Units Available </p>
            </div>

            <div className=' w-[20%] flex justify-end'>
            <div className=' rounded-full p-3 border h-fit border-solid border-black' >
                <BsArrowUpRight className=' text-2xl'/>
            </div>
            </div>
        </div>

        <div className=' flex justify-between border-b border-solid border-zinc-400 pb-3'>
            <div className='grid w-[80%]'>
                <h3 className=' text-black font-semibold text-3xl'> Condominiums </h3>
                <p className=' text-red-500 py-1 font-semibold'> 20+ Units Available </p>
            </div>

            <div className=' w-[20%] flex justify-end'>
            <div className=' rounded-full p-3 border h-fit border-solid border-black' >
                <BsArrowUpRight className=' text-2xl'/>
            </div>
            </div>
        </div>

        <div className=' flex justify-between border-b border-solid border-zinc-400 pb-3'>
            <div className='grid w-[80%]'>
                <h3 className=' text-black font-semibold text-3xl'> Townhouses </h3>
                <p className=' text-red-500 py-1 font-semibold'> 20+ Units Available </p>
            </div>

            <div className=' w-[20%] flex justify-end'>
            <div className=' rounded-full p-3 border h-fit border-solid border-black' >
                <BsArrowUpRight className=' text-2xl'/>
            </div>
            </div>
        </div>

        <div className=' flex justify-between border-b border-solid border-zinc-400 pb-3'>
            <div className='grid w-[80%]'>
                <h3 className=' text-black font-semibold text-3xl'> Green Homes </h3>
                <p className=' text-red-500 py-1 font-semibold'> 20+ Units Available </p>
            </div>

            <div className=' w-[20%] flex justify-end'>
            <div className=' rounded-full p-3 border h-fit border-solid border-black' >
                <BsArrowUpRight className=' text-2xl'/>
            </div>
            </div>
        </div>

        <div className=' flex justify-between border-b border-solid border-zinc-400 pb-3'>
            <div className='grid w-[80%]'>
                <h3 className=' text-black font-semibold text-3xl'> Apartments </h3>
                <p className=' text-red-500 py-1 font-semibold'> 20+ Units Available </p>
            </div>

            <div className=' w-[20%] flex justify-end'>
            <div className=' rounded-full p-3 border h-fit border-solid border-black' >
                <BsArrowUpRight className=' text-2xl'/>
            </div>
            </div>
        </div>

        <div className=' flex justify-between border-b border-solid border-zinc-400 pb-3'>
            <div className='grid w-[80%]'>
                <h3 className=' text-black font-semibold text-3xl'> Student 
                Housing </h3>
                <p className=' text-red-500 py-1 font-semibold'> 20+ Units Available </p>
            </div>

            <div className=' w-[20%] flex justify-end'>
            <div className=' rounded-full p-3 border h-fit border-solid border-black' >
                <BsArrowUpRight className=' text-2xl'/>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
