"use client"
import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {

  const style = {
    bgimageMobile: {
      background: 'url("./images/heroCoverMobile.png") center bottom',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",

    },

    bgimageDesktop: {
      background: 'url("./images/heroCoverDesktop.png") center bottom',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }


  };

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

    <div className=' bg-cover' style={isLargeScreen ? style.bgimageDesktop : style.bgimageMobile}>
      <div className='h-screen bg-co px-3 md:px-6 lg:px-12 flex flex-col justify-end bg-black bg bg-opacity-35 gradient'>
        <div className=' md:w-[80%] lg:w-[70%]'>
        <h1 className=' text-3xl md:text-4xl lg:text-5xl text-white leading-[37px] md:leading-[45px] lg:leading-[63px] font-medium lg:font-[580]'>
          Igniting Your Real Estate Odyssey Where Ambitions Merge with Potentia
        </h1>
        </div>
        <div className=' text-white py-5 md:py-8 md:flex md:justify-between'>
          <h3 className=' text-base md:w-[50%] lg:w-[48%] md:text-[18px]'>
          Craft your legacy with tailored real estate strategies and unmatched expertise for boundless investment triumphs Become a mem
          </h3>

          <div className='text-[#FFBA00] py-6 flex items-center gap-6 border-b-[#FFBA00] md:pb-1 pb-2 px-4 border-solid border-b-2 w-fit  '>
            <p className=' text-xl'> Become a Member </p>
            <FaArrowRight className=' text-2xl'/>
          </div>
        </div>
      </div>
    </div>
  )
}

