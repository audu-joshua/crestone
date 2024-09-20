import React from 'react'

export function Operate() {
  return (
    <div className='bg-white py-8 text-black px-3 md:px-6 lg:px-12'>
      <div>
        <div className=' text-black py-2 items-center text-center font-semibold text-[22px]'>
          <h2> Where We Operate </h2>
        </div>

        <h3 className='text-black text-center'>
        We are locally owned and located in Maryland but operate in Virginia and D.C. as well.
        </h3>

        <div className=' md:flex md:justify-between'>
            <div>
                <img src={'./images/O1.png'}></img>
            </div>
            <div>
                <img src={'./images/O2.png'}></img>
            </div>
            <div>
                <img src={'./images/O3.png'}></img>
            </div>
        </div>
      </div>
    </div>
  )
}

