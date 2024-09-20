import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { BgimgData } from '@/utils/listing';

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

  // Get the current image based on screen size
  const currentBgImg = isLargeScreen
    ? BgimgData[current].desktopImg
    : BgimgData[current].mobileImg;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${currentBgImg})` }}
        className="bg-cover bg-center h-screen flex justify-center items-center"
      >
        {/* Navigation controls */}
        <div className='absolute left-10'>
          <div
            className='bg-black border border-solid border-white cursor-pointer p-3 flex justify-center items-center rounded-full'
            onClick={prevBgImg}
          >
            <FaArrowLeft className='text-white' />
          </div>
        </div>

        <div className='absolute right-10'>
          <div
            className='bg-black border border-solid border-white cursor-pointer p-3 flex justify-center items-center rounded-full'
            onClick={nextBgImg}
          >
            <FaArrowRight className='text-white' />
          </div>
        </div>
      </div>
    </div>
  );
}
