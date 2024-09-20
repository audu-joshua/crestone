"use client"
import React, { useState, useEffect } from 'react';
import { TestimonialData } from '@/utils/testimonials';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(0);

  const nextTestimonial = () => {
    setCurrent(current === TestimonialData.length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? TestimonialData.length - 1 : current - 1);
  };

  const TotalTestimonial = TestimonialData.length


  useEffect(() => {
    setItemsToShow(window.innerWidth < 768 ? 1 : 1);

    const resizeListener = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 1);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div className='px-4 md:px-8 xl:px-24 pb-8 md:py-8 grid md:flex md:justify-between md:place-items-stretch bg-black'>

      <div className='flex md:grid md:justify-between md:w-[50%] justify-between items-center md:items-start py-6 md:py-0'>
        <div className='flex gap-4 md:gap-0 py-5 md:py-0 items-center'>
            <div className='p-1 h-3 w-3 rounded-full bg-red-600'></div>
            <h2> Testimonials </h2>
        </div>

        <div className='md:h-full md:flex md:items-end'>
            <h2 className=' text-3xl text-white'>{current + 1}/{TotalTestimonial}</h2>
        </div>

      </div>



      <div className='flex justify-center md:h-full md:w-[50%]'>

        {TestimonialData.slice(current, current + itemsToShow).map((item, i) => (
            
          <div
            key={i}
            
          >
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
              <img
                src={item.img}
                alt={item.name}
                className='w-16 h-16 rounded-full object-cover mr-4'
              />
              <div className='gap-0'> 
              <h4 className='text-white font-medium text-sm'>
                  {item.name}
                </h4>
                <h5 className='text-[#bbbbbb] font-medium text-xs'>
                {item.title}
                </h5>
                </div>
              </div>

              <div className='flex gap-4'>
          <div
            className='bg-black border border-solid border-white cursor-pointer p-3 flex justify-center items-center rounded-full'
            onClick={prevTestimonial}
          >
            <FaArrowLeft className='text-white' />
          </div>
          <div
            className='bg-black border border-solid border-white cursor-pointer p-3 flex justify-center items-center rounded-full'
            onClick={nextTestimonial}
          >
            <FaArrowRight className='text-white' />
          </div>
        </div>
            </div>
            <p className='text-white text-2xl py-6'>
              "{item.description}"
            </p>

            <div className='flex w-full'> 
              <div className=' w-[50%] md:h-2 h-[4px] bg-slate-500 rounded-xl'> </div>
              <div className=' w-[50%] md:h-2 h-[4px] bg-slate-100 rounded-xl'> </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
