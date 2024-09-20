import React from 'react'


export default function AboutHero() {
  return (
    <div className='bg-white py-16 md:pb-12 pt-24 md:pt-36 text-black px-3 md:px-6 lg:px-12'>
        <div className=' md:w-[50%]'>
            <div className='flex gap-4 py-5 items-center'>
                <div className='p-1 h-3 w-3 rounded-full bg-red-600'></div>
                <h2> About Us </h2>
            </div>

            <h3 className=' font-semibold text-2xl md:text-5xl md:leading-[1.3] py-2 '>
                Learn About Crestone Holdings & Investments
            </h3>

            <p className=' leading-[1.30] py-3 pb-5 md:text-xl'>
            Crestone Holdings & Investments is where the power of real estate investment and education transforms dreams into enduring legacie
            </p>
      </div>
    </div>
  )
}
