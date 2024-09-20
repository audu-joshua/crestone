import React from 'react'

export function OurValues() {
  return (
    <div className='bg-black text-white py-8 px-3 md:px-6 lg:px-12'>
        
        <div className='md:flex md:gap-10'>
    <div className=' md:w-[50%]'>
      <div className='flex gap-4 py-5 items-center'>
        <div className='p-1 h-3 w-3 rounded-full bg-red-600'></div>
        <h2> Our Values </h2>
      </div>

      <h3 className='font-semibold text-[22px] py-2 md:w-[80%]  '>
      Crestone Holdings & Investments  is where the power of real estate
      </h3>

      <p className=' leading-[1.30] py-3 pb-5 text-[#bbbbbb]'>
      Investment and education transforms dreams into enduring legacies. Our core purpose is deeply rooted in the belief that every individual has the potential to achieve their aspirations and leave a lasting mark in the world of real estate.
    </p>
    </div>

    <div className='h-[50vh] md:h-[60vh] md:w-[50%]'>
        <img src={"/images/c1.png"} className=' rounded-xl h-full'></img>
    </div>
    </div>

    <div>
        <div>
        <hr className=' border-[1px] border-solid  border-stone-300 my-10'></hr>

        <h3 className='font-medium text-[22px] md:w-[70%]'>
      Crestone Holdings & Investments  is where the power of real estate
      </h3>

      <p className=' leading-[1.30] text-center text-[#bbbbbb] py-3 pb-5 md:w-[70%] md:text-start'>
      Investment and education transforms dreams into enduring legacies. Our core purpose is deeply rooted in the belief that every individual has the potential to achieve their aspirations and leave a lasting mark in the world of real estate.
    </p>
        </div>

        <div className=' grid md:flex md:justify-between md:gap-4 gap-6'>

            <div>
                <img src={'/images/safety.svg'}></img>
                <h3 className='text-lg py-1 font-semibold'> 
                Safety
                </h3>
                <p className=' font-thin text-[#8E8E8E]'>
                Investment and education transforms dreams into enduring legacies.
                </p>
            </div>

            <div>
                <img src={'/images/afford.svg'}></img>
                <h3 className='text-lg py-1 font-semibold'> 
                Affordability
                </h3>
                <p className=' font-thin text-[#8E8E8E]'>
                Investment and education transforms dreams into enduring legacies.
                </p>
            </div>

            <div>
                <img src={'/images/comfort.svg'}></img>
                <h3 className='text-lg py-1 font-semibold'> 
                Comfort
                </h3>
                <p className=' font-thin text-[#8E8E8E]'>
                Investment and education transforms dreams into enduring legacies.
                </p>
            </div>

            <div>
                <img src={'/images/community.svg'}></img>
                <h3 className='text-lg py-1 font-semibold'> 
                Community
                </h3>
                <p className=' font-thin text-[#8E8E8E]'>
                Investment and education transforms dreams into enduring legacies.
                </p>
            </div>

        </div>
    </div>
  </div>
  )
}

