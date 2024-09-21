import React from 'react'

export function ListingHero() {
  return (
    <div className='bg-white py-16 md:pb-12 pt-24 md:pt-36 text-black px-3 md:px-6 lg:px-12'>
      <div className='md:flex md:justify-between'>
        <div>
        <div className=' flex text-base text-black justify-between md:justify-normal md:gap-4'>
            <p className='p-2 border border-solid border-[#999999] rounded-full'> Single Homes</p>
            <p className='p-2 border border-solid border-[#999999] rounded-full'> Condos</p>
            <p className='p-2 border border-solid border-[#999999] rounded-full'> Family Homes</p>
        </div>

        <h1 className='py-6 font-semibold text-3xl text-black md:w-[80%] md:text-4xl lg:w-[75%]'>
            Explore a Wealth of Opportunities with Crestone Holdings and Investment
        </h1>
        </div>

        <div className='md:flex md:flex-col md:items-end justify-end'>
            <p className='text-black pb-4'> Discover a Range of Properties Tailored to Your Investment Goals</p>
            <div className='bg-black p-2 rounded-2xl w-fit flex gap-2 px-4'>
                <img src={'/images/apple.svg'}/>
                <img src={'/images/android.svg'}/>
                <p className='text-white font-[550]'> Coming Soon </p>
            </div>
        </div>
      </div>
    </div>
  )
}

