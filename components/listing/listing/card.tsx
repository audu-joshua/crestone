import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const ContactInfoCard = () => {
  return (
    <div className="border border-solid border-[#d4d3d3] bg-gray-100 p-4 md:p-6 rounded-lg shadow">
      <div className="flex items-center justify-between space-x-4 mb-4">
        <div className='flex gap-2 items-center'>
        <img src={'/images/T2.svg'} width={65} height={65} alt="Lance Straull" className="rounded-full" />
          <div>
          <h2 className="text-lg font-medium">Lance Straull</h2>
          <p className="text-gray-500">Italian Investor</p>
          </div>
        </div>
        <div className=' text-white flex justify-between items-center gap-2 p-2 px-3 rounded-3xl bg-black'>
            <MessageCircle size={20}/>
            <p>Chat</p>
        </div>
      </div>

      <div className="space-y-2 bg-white md:p-8 md:py-6 p-4 rounded-xl">
        <p className=' font-semibold'> Contact information</p>
        <div>
          <h3 className="font-medium">Phone</h3>
          <div className='flex gap-3 items-center text-gray-500 py-2'>
            <Phone size={20}/>
          <p className=' text-gray-500'>+1-903-465-8976</p>
          </div>
        </div>
        <div>
          <h3 className="font-medium">Email</h3>
          <div className='flex gap-3 items-center text-gray-500 py-2'>
            <Mail size={20}/>
          <p className=' text-gray-500'>lancestraull@gmail.com</p>
          </div>
        </div>
        <div>
          <h3 className="font-medium">Address</h3>
          <div className='flex gap-3 items-center text-gray-500 py-2'>
            <MapPin size={20}/>
          <p className=' text-gray-500'>123 Ocean Drive, Miami Beach, FL 33139, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;