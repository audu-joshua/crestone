"use client"
import React, { useState, useEffect } from 'react'
import { FaLongArrowAltRight, FaLocationArrow } from 'react-icons/fa'

export function ListingGallery() {

  const G1Style = {
    bgimageMobile: {
      background: 'url("./images/right.png") center bottom',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",

    },

    bgimageDesktop: {
      background: 'url("./images/right.png") center bottom',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }
  }

  const [isLargeScreen, setIsLargeScreen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className=' px-3 md:px-6 lg:px-12 md:flex bg-white md:py-14 lg:py-20 justify-between md:gap-12 text-black'>
        <div className='md:w-[50%]'>
          <h2 className='text-4xl py-10 md font-bold leading-tight'> Listings Gallery</h2>
          
        </div>
        <div className='md:w-[50%]'>
          <p className='text-base'>
          Step into a curated showcase of extraordinary properties. From modern marvels to timeless classics, explore spaces designed to inspire and elevate your lifestyle. Your dream home awaits—take a closer look.
          </p>
        </div>
      </div>

      <div className=' md:grid grid-cols-2 md:w-full overflow-x-hidden'>
        
        <div className=' py-8 col-start-2 col-end-2 bg-white ' style={isLargeScreen ? G1Style.bgimageDesktop : G1Style.bgimageMobile}>
          <div className='flex items-end justify-end p-4'>
            <FaLongArrowAltRight className='text-3xl h-12 rotate-[320deg] text-black' />
          </div>
          <div className=' py-8 flex items-center justify-center'>
            <p className=' flex items-center text-center w-40 h-40 text-black bg-[#ffba00] p-2 rounded-full uppercase text-base font-semibold'> Explore Listings In ontario</p>
          </div>
        </div>

        <div className=' bg-white grid items-end col-start-1 row-start-1 row-end-1'>
          <img src='./images/c3.png' className='w-full md:h-full h-[350px]'></img>
          <div className='absolute w-full md:w-[50%] px-4 pb-4'>
            <div className=' p-4 flex md:w-full justify-between rounded-2xl text-black bg-white bg-opacity-40 '>
              <div className=''>
                <p> Valley Vista Villas Overlook Estates </p>
                <h3 className='font-bold text-xl py-2'> $640,000.00 </h3>

                <div className='flex gap-2'>
                  <FaLocationArrow className='text-2xl text-black' />
                  <p> 123 Maple Street <br></br> Toronto, ON, Canada </p>
                </div>
              </div>
              <div>
                <div className='bg-[#ffba00] p-2 flex justify-center items-center h-12 w-12 rounded-full'>
                  <FaLongArrowAltRight className='text-xl h-12 rotate-[320deg] text-black' />
                </div>

              </div>

            </div>
          </div>
        </div>


        <div className=' py-8 bg-white col-start-1 col-end-2 row-start-2 ' style={isLargeScreen ? G1Style.bgimageDesktop : G1Style.bgimageMobile}>
          <div className='flex items-end justify-start p-4'>
            <FaLongArrowAltRight className='text-3xl h-12 rotate-[-130deg] text-black' />
          </div>
          <div className=' py-8 flex items-center justify-center'>
            <p className=' flex items-center text-center w-40 h-40 text-black bg-[#ffba00] p-2 rounded-full uppercase text-base font-semibold'> Explore Listings In UK</p>
          </div>
        </div>

        <div className=' bg-white grid items-end col-start-2 col-end-2 row-start-2 overflow-x-hidden'>
          <img src='./images/c3.png' className=' w-full md:h-full h-[350px]'></img>
          <div className='absolute md:w-[50%] px-4 pb-4'>
            <div className=' md:w-full p-4 flex justify-between rounded-2xl text-black bg-white bg-opacity-40 '>
              <div className=''>
                <p> Harborview Heights Coastal Homes </p>
                <h3 className='font-bold text-xl py-2'> $92,000.00 </h3>

                <div className='flex gap-2'>
                  <FaLocationArrow className='text-2xl text-black' />
                  <p> 45 Primrose Avenue <br></br> London, SE10 8QX, United Kingdom </p>
                </div>
              </div>
              <div>
                <div className='bg-[#ffba00] p-2 flex justify-center items-center h-12 w-12 rounded-full'>
                  <FaLongArrowAltRight className='text-xl h-12 rotate-[320deg] text-black' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
