"use client";
import React, { useState, useEffect } from 'react';
import { CarouselData } from '@/utils/carousel';
import { FaLongArrowAltRight } from 'react-icons/fa';

export function CarouselHome() {
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(0);
  const [animateNext, setAnimateNext] = useState(false); // State for animation trigger

  const nextImage = () => {
    setCurrent(current === CarouselData.length - 1 ? 0 : current + 1);
    setAnimateNext(true); // Trigger animation
  }

  const prevImage = () => {
    setCurrent(current === 0 ? CarouselData.length - 1 : current - 1);
    setAnimateNext(true); // Trigger animation
  }

  useEffect(() => {
    // Set number of items to show based on window width
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 2);
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='px-3 md:px-6 lg:px-12 bg-white'>
      <div className='md:flex md:py-14 lg:py-20 justify-between md:gap-12 text-black'>
        <div className='md:w-[50%]'>
          <h2 className='text-4xl py-10 md font-bold leading-tight'> Figma ipsum component variant main layer. Horizontal</h2>
        </div>
        <div className='md:w-[50%]'>
          <p className='text-base'>
            Figma ipsum component variant main layer. Font star variant blur union link move component blur arrange. Underline clip bullet italic comment strikethrough ipsum. Arrange ipsum figma arrange underline asset bold. Vector text pixel move community vector content ipsum. Underline invite clip layout vertical font ipsum hand undo comment. Bold group thumbnail fill asset pen. Subtract duplicate layer arrange star outline. Scrolling stroke blur horizontal draft flows pencil style stroke. Object.
          </p>

          <div className='py-8 flex justify-between'>
            <div className='flex gap-2 items-center'>
              <p className='text-xl lg:text-2xl font-bold'> $10M </p>
              <span className='text-xs lg:text-sm'> Properties <br /> Sold</span>
            </div>

            <div className='flex gap-2 items-center'>
              <p className='text-xl lg:text-2xl font-bold'> 10+ </p>
              <span className='text-xs lg:text-sm'> Years  <br /> Experience</span>
            </div>

            <div className='flex gap-2 items-center'>
              <p className='text-xl lg:text-2xl font-bold'> 100+ </p>
              <span className='text-xs lg:text-sm'> Client <br /> Reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex flex-wrap justify-center">
          {CarouselData.slice(current, current + itemsToShow).map((item, i) => (
            <div key={i} className={`w-full md:w-1/2 mb-4 ${animateNext ? 'animate-next-image' : ''}`}>
              <div className="rounded shadow-sm">
                <div className='md:flex md:px-4 md:justify-between grid justify-center gap-4 py-2 text-black items-center'>
                  <img className="flex w-full rounded-xl" src={item.img} alt={item.name} />
                </div>
              </div>
            </div>
          ))}
          <div className='absolute items-center h-[36%] justify-end md:pr-6 w-full flex z-10'>
            <div
              className='text-white cursor-pointer h-fit p-4 text-xl rounded-full bg-white bg-opacity-20 backdrop-blur-[2px]'
              onClick={() => {
                nextImage();
                setTimeout(() => setAnimateNext(false), 500); // Reset animation state after 0.5s
              }}
            >
              <FaLongArrowAltRight className=' text-black' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
