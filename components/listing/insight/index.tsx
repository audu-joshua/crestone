import React from 'react'

export default function Insight() {
  return (
    <div className='bg-white py-8 text-black px-3 md:px-6 lg:px-12'>
      <div>
        <div className='flex gap-4 py-5 items-center'>
          <div className='p-1 h-3 w-3 rounded-full bg-red-600'></div>
          <h2 className='text-black text-xl'> Insight </h2>
        </div>

        <h3 className=' font-semibold text-3xl leading-snug py-2 md:pb-4 md:w-[40%] '>
          Benefits of Investing in Real Estate
        </h3>
      </div>

      <div className='grid gap-8 md:flex md:justify-between md:gap-4'>
        <div className='grid bg-slate-100 gap-4 rounded-xl p-6 md:p-4 border border-solid border-slate-400 '>
          <img src={'/images/I1.svg'} />
          <h3 className='text-black text-[27px] font-bold'> Stable Income</h3>
          <p className=' text-gray-700'>Real estate properties, especially rental
            properties, can provide a steady stream of
            income through rental payments. This
            income can be relatively stable compared
            to others </p>
        </div>

        <div className='grid bg-black gap-4 rounded-xl p-6 md:p-4 border border-solid border-slate-400 '>
          <img src={'/images/I2.png'} />
          <h3 className='text-white text-[27px] font-bold'> Appreciation Over Time</h3>
          <p className=' text-neutral-200'>Over time, real estate properties generally
            appreciate in value, meaning they increase
            in worth. This appreciation can result in
            significant gains when prop </p>
        </div>

        <div className='grid bg-slate-100 gap-4 rounded-xl p-6 md:p-4 border border-solid border-slate-400 '>
          <img src={'/images/I3.svg'} />
          <h3 className='text-black text-[27px] font-bold'> Tax Advantage</h3>
          <p className=' text-gray-700'>Real estate investors often benefit from
            various tax advantages, such as
            depreciation deductions, mortgage
            interest deductions, and property tax
            deductions. </p>
        </div>
      </div>
    </div>
  )
}
