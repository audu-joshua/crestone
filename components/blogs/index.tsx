import React from 'react'
import { BlogsData } from '@/utils/blogsData'
import { BsArrowUpRight } from 'react-icons/bs'


export default function Blogs() {
  return (
    <div className='bg-white py-16 md:pb-12 pt-24 md:pt-36 text-black px-3 md:px-6 lg:px-12'>
        <div className=' md:w-[50%]'>
            <div className='flex gap-4 py-5 items-center'>
                <div className='p-1 h-3 w-3 rounded-full bg-red-600'></div>
                <h2> Blogs </h2>
            </div>

            <h3 className=' font-semibold text-2xl md:text-5xl md:leading-[1.3] py-2 '>
                Read our insights
            </h3>
      </div>

      <div className=' grid gap-6 md:grid-cols-3 '>
        {BlogsData.map((item, i) => (
            <div key={i} className=''> 
                <div className=' '>
                    <img src={item.img} />
                    <div className='flex justify-between pt-4 pb-2'>
                        <div className='w-[80%]'>
                            <h4 className=' text-black font-bold text-lg'>{item.title}</h4></div>
                        <div className=' w-[20%] flex justify-end'>
                            <div className=' rounded-full p-3 border h-fit border-solid border-black' >
                                <BsArrowUpRight className=' text-2xl' />
                            </div>
                        </div>
                    </div>
                    <p className=' text-[#8E8E8E]'> {item.brief.split('.').shift() + '.'}</p>
                </div>

            </div>
        ))}
      </div>
    </div>
  )
}
