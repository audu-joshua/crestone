import React from 'react'
import {FaBeer, FaBox, FaPhone, FaAddressCard} from "react-icons/fa"

export function Footer() {
  return (
    <>
    <div className='p-[20px] bg-black w-full md:py-[40px] md:px-[50px]'>
      <div className=' md:flex md:justify-between'>
        <h3 className='text-white py-3 text-[20px] lg:font-medium md:w-[35%]'> Be the First to Know About Discounts, Offers and Events</h3>
        
        <div className='flex items-center lg:w-[40%] justify-between my-4 gap-2 bg-white px-2 rounded-lg lg:rounded-2xl py-2 '>
          <div className='flex items-center w-full'>
        <img src={'/images/icon.svg'} className=' h-8 w-8'>
        </img>
        <input placeholder='Enter your mail' className='text-black lg:py-1 w-full lg:px-8 pl-2 lg:pl-4 outline-none py-2 rounded-lg placeholder:text-black'/>
        </div>
        <button className='bg-black p-2 px-4 lg:rounded-lg text-white rounded-md'> Submit</button>
        </div>
      </div>

      <div className='md:flex md:w-full md:justify-between'>
        <div className=' md:w-[40%] lg:w-[35%]'>
          <img src='./images/logowhite.svg' className='py-2'></img>
          <p className='text-[#8E8E8E] lg:font-medium lg:text-[15px] leading-[21.16px] py-4'>
          We focus on personal and professional development through mindset and investing, 
          so you can grow with confidence
          </p>
        </div>

        <div className=' grid gap-6 py-4 md:flex md:justify-between md:gap-x-8'>
          <div className='text-white flex gap-4'>
            <FaPhone/>
            <div>
              <p> Tel </p>
              <p> 310 437-276 </p>
            </div>
          </div>

          <div className='text-white flex gap-4'>
          <FaBox/>
            <div>
              <p> Mail </p>
              <p className=''> james@crestoneholdings.com </p>
            </div>
          </div>

          <div className='text-white flex gap-4 '>
            <FaAddressCard/>
            <div>
              <p> Address </p>
              <p className=''> 706 Campfire Ave. Meriden, CT 06450 </p>
            </div>
          </div> 
        </div>
      </div>

        <div className='grid grid-cols-3 gap-y-6 md:flex md:justify-between'>
            <ul className='text-white grid gap-2'>
              <label className=' font-bold md:text-[16px] text-white'> About </label>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> About us </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Insights </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Listings </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Courses </li>
            </ul>

            <ul className='text-white grid gap-2'>
              <label className='font-bold grid gap-2 md:text-[16px] text-white'> Support </label>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Help Center </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Online Chat </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Whatsapp </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Telegram </li>
            </ul>

            <ul className='font-bold grid gap-2 md:text-[16px] text-white'>
              <label className=' font-semibold'> Company </label>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Become a Member </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Newsletter </li>
            </ul>

            <ul className='font-bold grid gap-2 md:text-[16px] text-white'>
              <label className=' font-semibold'> Legal </label>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Privacy Policy </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> No Refund Policy </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Terms Of Use </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> User Policy </li>
            </ul>

            <ul className='font-bold grid col-start-3 gap-2 md:text-[16px] text-white'>
              <label className=' font-semibold'> FAQ </label>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Account </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Investment </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Payments </li>
              <li className=' font-normal text-[#8E8E8E] md:text-[16px]'> Returns </li>
            </ul>
        </div>

        <div className='text-white py-6'>
          <hr className='w-full md:font-semibold '></hr>
          <div className='py-4  md:flex md:justify-between md:pb-0'>
          <p className=' font-normal text-[white] md:text-[16px]'> © Crestone Holdings & Investments </p>
          <p className=' font-normal text-[white] md:text-[16px]'> © 2001-2004, All Right Reserved</p>
          </div>
        </div>
      </div>
      </>
  )
}
