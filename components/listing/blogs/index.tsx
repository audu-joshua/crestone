import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

export default function Blogs() {
    return (
        <div className='bg-slate-100 py-8 text-black px-3 md:px-6 lg:px-12'>
            <div className='flex gap-4 py-5 items-center'>
                <div className='p-1 h-3 w-3 rounded-full bg-red-600'></div>
                <h2> Blogs </h2>
            </div>

            <div className=' md:flex md:justify-between'>
                <h3 className=' text-black font-semibold text-3xl pb-6 md:pb-12'> Read Our Insights </h3>
                <div className='p-4 h-fit px-7 bg-black text-white hidden md:flex rounded-full gap-4 md:items-center md:justify-between'>
                <p className=''>
                    See More 
                </p>
                <BsArrowUpRight className=' text-xl font-semibold'/>
                </div>
            </div>

            <div className=' md:flex gap-8 grid md:justify-between'>
                <div>
                    <img src={'/images/B1.png'} />
                    <div className='flex justify-between pt-4 pb-2'>
                        <div className='w-[80%]'>
                            <h4 className=' text-black font-bold text-lg'>Maximizing Income: Property
                                Owners</h4></div>
                        <div className=' w-[20%] flex justify-end'>
                            <div className=' rounded-full p-3 border h-fit border-solid border-black' >
                                <BsArrowUpRight className=' text-2xl' />
                            </div>
                        </div>
                    </div>
                    <p className=' text-[#8E8E8E]'> Learn proven strategies to optimize rental
                        income, attract quality tenants, and maximÁ· </p>
                </div>

                <div>
                    <img src={'/images/B1.png'} />
                    <div className='flex justify-between pt-4 pb-2'>
                        <div className='w-[80%]'>
                            <h4 className=' text-black font-bold text-lg'>Maximizing Income: Property
                                Owners</h4></div>
                        <div className=' w-[20%] flex justify-end'>
                            <div className=' rounded-full p-3 border h-fit border-solid border-black' >
                                <BsArrowUpRight className=' text-2xl' />
                            </div>
                        </div>
                    </div>
                    <p className=' text-[#8E8E8E]'> Learn proven strategies to optimize rental
                        income, attract quality tenants, and maximÁ· </p>
                </div>

                <div>
                    <img src={'/images/B1.png'} />
                    <div className='flex justify-between pt-4 pb-2'>
                        <div className='w-[80%]'>
                            <h4 className=' text-black font-bold text-lg'>Maximizing Income: Property
                                Owners</h4></div>
                        <div className=' w-[20%] flex justify-end'>
                            <div className=' rounded-full p-3 border h-fit border-solid border-black' >
                                <BsArrowUpRight className=' text-2xl' />
                            </div>
                        </div>
                    </div>
                    <p className=' text-[#8E8E8E]'> Learn proven strategies to optimize rental
                        income, attract quality tenants, and maximÁ· </p>
                </div>
            </div>

            <div className='p-4 h-fit bg-black px-7 text-white md:hidden flex rounded-full gap-4 items-center justify-between w-fit mt-8'>
                <p className=''>
                    See More 
                </p>
                <BsArrowUpRight className=' text-xl font-semibold'/>
                </div>

        </div>
    )
}
