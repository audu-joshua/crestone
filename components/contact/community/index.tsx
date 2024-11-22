import React from 'react'
import { BsArrowUpRight, BsPlus } from 'react-icons/bs'

export default function CommunityForum() {
    return (
        <div className='bg-white text-black py-4 px-3 md:px-6 lg:px-12'>
            <div className='md:flex md:py-8'>

            <div className="bg-[url('/images/Cmobile.svg')] md:bg-[url('/images/CDesktop.svg')] bg-cover bg-center md:bg-left-top  p-4 rounded-tr-2xl rounded-tl-2xl h-[50vh] md:w-[40%] lg:h-[70vh] md:h-[50vh] md:flex md:justify-end md:flex-col">

                <h3 className=' font-bold text-3xl'> Community Forum and Discussion Board </h3>
                <p className='text-[#5C5C5C] font-normal text-base py-2 '>
                Welcome to our Community Forums and Discussion Boards, this is a space designed for investors like you to connect, share insights, and learn from one another's experiences in the world of real estate investment.
                </p>
            </div>

            <div className="bg-[url('/images/C2mobile.png')] md:bg-[url('/images/C2desktop.png')] bg-cover bg-center p-2 rounded-2xl h-fit  md:w-[60%] md:flex md:justify-end md:p-4 lg:h-[70vh] md:h-[50vh]">

            <div className='grid gap-3 grid-cols-1 lg:w-[50%] md:w-[80%] '>

                <div className='bg-[#FFFFFF] border border-[#D7D7D7] p-2 rounded-lg pb-4 md:pb-0'>
                    <div className=' flex justify-between border-b-[1.22px] border-solid pb-4 border-b-[#D7D7D7] md:h-fit'>
                        <div className=' bg-[#4E53EE] p-3 rounded-lg'>
                        <img src={'images/CV1.svg'}/>
                        </div>
                        <div>
                            <p className='text-black font-semibold text-lg'>Community Forum</p>
                            <p className=' font-normal text-base text-[#8E8E8E]'> Join the conversation </p>
                        </div>
                        <div className='p-3 flex justify-center items-center bg-[#EBEBEB] border border-solid border-[#D4D4D4] rounded-lg'>
                            <BsArrowUpRight className=' text-2xl'/>
                        </div>
                    </div>
                    <p className=' text-base font-normal text-[#5C5C5C] pt-2'>  Start engaging today to enhance your real estate investment journey! </p>
                </div>

                <div className='bg-[#FFFFFF] border border-[#D7D7D7] p-2 rounded-lg pb-4 md:pb-0 '>
                    <div className=' flex justify-between border-b-[1.22px] border-solid pb-4 border-b-[#D7D7D7]'>
                        <div className=' bg-[#59B17C] p-3 rounded-lg'>
                        <img src={'images/CV2.svg'}/>
                        </div>
                        <div>
                            <p className='text-black font-semibold text-lg'>Discussion Board</p>
                            <p className=' font-normal text-base text-[#8E8E8E]'> Get involved </p>
                        </div>
                        <div className='p-3 flex justify-center items-center bg-[#EBEBEB] border border-solid border-[#D4D4D4] rounded-lg'>
                            <BsArrowUpRight className=' text-2xl'/>
                        </div>
                    </div>
                    <p className=' text-base font-normal text-[#5C5C5C] pt-2 truncate'>  Explore topics, ask questions, and contribute to discussions in our Discussion Board </p>
                </div>

                <div className='bg-[#FFFFFF] border border-[#D7D7D7] p-3 rounded-lg flex justify-between items-center'>
                    <p className=' text-[#171717] font-semibold text-lg'> General Enquiry </p>
                    <BsPlus className=' text-3xl'/>
                </div>
                </div>
                 
            </div>  
            </div>

            <p className=' font-bold text-2xl text-center py-8 md:text-4xl lg:text-[40px]'> Your go-to resource for comprehensive assistance, troubleshooting guides, and answers to frequently asked questions.</p>
            
        </div>
    )
}
