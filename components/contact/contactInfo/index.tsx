import React from 'react'

export default function ContactInfo() {
    return (
        <div className='bg-white text-black py-4 px-3 md:px-6 lg:px-12'>
            <div className='flex gap-4 items-center py-2'>
                <div className='p-1 h-3 w-3 rounded-full bg-red-600'></div>
                <h3> Contact info </h3>
            </div>

            <h2 className=' text-black text-3xl font-bold pb-6'>Get our contact information</h2>


            <div className=' grid grid-cols-1 gap-5 md:grid-cols-4 w-full'>
                <div className='bg-[#EEEEEE] w-[100%] border border-solid border-[#D7D7D7] p-5 rounded-lg'>
                    <img src={'./images/address.svg'}/>
                    <h4 className=' text-black py-3 font-semibold border-b border-solid border-b-[#D7D7D7]'> Address </h4>
                    <p className=' text-[#8E8E8E] pt-2 text-base'> 706 Campfire Ave, #06450 Meriden, Ontario, Canada  </p>
                </div>

                <div className='bg-[#EEEEEE] border border-solid border-[#D7D7D7] p-5 rounded-lg'>
                    <img src={'./images/customer.svg'}/>
                    <h4 className=' text-black py-3 font-semibold border-b border-solid border-b-[#D7D7D7]'> Customer Support </h4>
                    <p className=' text-[#8E8E8E] pt-2 text-base break-all'> customersupport@crestoneholdings.com  </p>
                </div>

                <div className='bg-[#EEEEEE] border border-solid border-[#D7D7D7] p-5 rounded-lg'>
                    <img src={'./images/enquiry.svg'}/>
                    <h4 className=' text-black py-3 font-semibold border-b border-solid border-b-[#D7D7D7]'> General Enquiry </h4>
                    <p className=' text-[#8E8E8E] pt-2 text-base break-all '> generalenquiry@crestoneholdings.com  </p>
                </div>

                <div className='bg-[#EEEEEE] border border-solid border-[#D7D7D7] p-5 rounded-lg'>
                    <img src={'./images/address.svg'}/>
                    <h4 className=' text-black py-3 font-semibold border-b border-solid border-b-[#D7D7D7]'> Socials </h4>
                    <div className=' flex justify-between pt-2 w-[70%]'>
                        <img src={'/images/x.svg'}/>
                        <img src={'/images/linkedin.svg'}/>
                        <img src={'/images/facebook.svg'}/>
                        <img src={'/images/instagram.svg'}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
