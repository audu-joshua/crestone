import React from 'react'

export function InvestmentImages() {
  return (
    <div>
        <hr className=' border border-solid border-stone-300 mx-3 md:mx-6 lg:mx-12'></hr>
        <div className=' grid grid-flow-col gap-2 md:gap-4 bg-white py-8 md:grid-cols-5'>
        <div className=' hidden h-full md:flex items-end'>
            <img src={"/images/c3.png"} className=' rounded-br-lg rounded-tr-lg h-[80%]' ></img>
        </div>
        <div className='md:col-span-2'>
            <img src={"/images/c1.png"} className=' md:rounded-lg rounded-br-lg rounded-tr-lg h-full' ></img>
        </div>
        <div className=' hidden md:flex items-end'>
            <img src={"/images/c2.png"} className=' rounded-lg md:h-[80%]' ></img>
        </div>
        <div className='h-full flex items-end'>
            <img src={"/images/beautiful-house.png"} className=' rounded-bl-lg rounded-tl-lg h-[80%] md:h-[90%] ' ></img>
        </div>
        </div>
    </div>
  )
}

