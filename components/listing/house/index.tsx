"use client"
import React, { useState, useEffect } from 'react';
import { BgimgData } from '@/utils/listing';
import { BsArrowRight, BsSearch } from 'react-icons/bs';

export function Houses() {
  const [current, setCurrent] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to go to the next image
  const nextBgImg = () => {
    setCurrent(current === BgimgData.length - 1 ? 0 : current + 1);
  };



  // Function to go to the previous image
  const prevBgImg = () => {
    setCurrent(current === 0 ? BgimgData.length - 1 : current - 1);
  };

  const TotalBgImage = BgimgData.length;

  // Get the current image based on screen size
  const currentBgImg = isLargeScreen
    ? BgimgData[current].desktopImg
    : BgimgData[current].mobileImg;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${currentBgImg})`, backgroundColor: 'black' }}
        className="bg-cover bg-center h-[80vh] "
      >
        <div className='bg-black bg-opacity-50 p-4 py-8 md:p-12 h-full grid justify-betweens'>
          <div>
            <p className='text-white font-light'> Multi-Family House</p>
          </div>
          {/* Navigation controls */}
          <div className='h-full items-end grid md:flex md:justify-between md:gap-4 lg:gap-16'>
            <div className=' text-white bg-[#FFFFFF1A] p-4 rounded-xl border border-solid border-[#FFFFFF4D] md:w-full'>
              <div className='grid grid-cols-2 gap-6 md:flex md:justify-between'>
                <div className=' bg-transparent grid gap-3'>
                  <label className='text-white'> Category </label>
                  <select className='bg-transparent optional:bg-black rounded-md p-1 outline-none w-full'>
                    <option className='bg-transparent  optional:w-5 w-5'> Select </option>
                    <option className='bg-transparent '> Rent </option>
                    <option className='bg-transparent '> Buy </option>
                  </select>
                </div>

                <div className=' bg-transparent grid gap-3'>
                  <label className='text-white'> Location </label>
                  <select className='bg-transparent optional:bg-black rounded-md p-1 outline-none w-full'>
                    <option className='bg-transparent'> Select </option>
                    <option className='bg-transparent'> UK </option>
                    <option className='bg-transparent'> Canada </option>
                  </select>
                </div>

                <div className=' bg-transparent grid gap-3'>
                  <label className='text-white'> Type </label>
                  <select className='bg-transparent optional:bg-black rounded-md p-1 outline-none w-full'>
                    <option className='bg-transparent'> Select </option>
                    <option className='bg-transparent'> Condomium </option>
                    <option className='bg-transparent'> Luxury </option>
                  </select>
                </div>

                <div className=' bg-transparent grid gap-3'>
                  <label className='text-white'> Price Range </label>
                  <select className='bg-transparent optional:bg-black rounded-md p-1 outline-none w-full'>
                    <option className='bg-transparent'> Select </option>
                    <option className='bg-transparent'> $1,000 - $15,000 </option>
                    <option className='bg-transparent'> $16,000 + </option>
                  </select>
                </div>

                <div className='col-start-2 flex justify-end '>
                <div className='bg-[#FFFFFF33] p-4 flex w-fit items-center justify-center rounded-full '>
                  <BsSearch className='text-xl' />
                </div>
                </div>
              </div>
            </div>

            <div className=' grid md:w-[50%] lg:w-[70%]'>
              <div className='flex w-full justify-between items-center'>
                <p className=' text-lg'> {current + 1}/{TotalBgImage}</p>
                <div
                  className='cursor-pointer'
                  onClick={nextBgImg}
                >
                  <BsArrowRight className='text-white font-black text-3xl' />
                </div>
              </div>

              <div className='flex space-x-2 mt-4'>
                {BgimgData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-full h-1 rounded-md ${current === index ? 'bg-white' : 'bg-[#FFFFFF66]'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
