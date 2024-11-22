"use client"
import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { Property, Category } from '@/utils/apatrment';
import { apartmentData } from '@/utils/apatrment';

interface ListingCardProps {
  property: Property;
}

const ListingCard: React.FC<ListingCardProps> = ({ property }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className='grid md:flex md:w-full md:justify-between '>
    <div className='md:flex md:justify-between md:w-[80%]'>
    <div className="flex gap-4">
      <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
        <img 
          src={property.image || "/api/placeholder/400/320"} 
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid">
        <h3 className="font-semibold text-lg">{property.name}</h3>
        <p className="text-red-500">{property.status}</p>
        <p className="text-sm text-gray-600">{property.address}</p>
      </div>
    </div>
    
    <div className="hidden text-sm text-gray-600  md:flex md:items-center">
  <p className='bg-[#EEEEEE] p-3 rounded-3xl border border-solid border-[#D8D8D8]'>{property.type}</p>
</div>
    
    <div className="hidden md:flex md:items-center text-sm ">
      <p className="font-semibold">{property.price}</p>
    </div>
    </div>
    <div className=" text-white m-2 md:flex md:items-center">
      <p className='bg-black w-full p-2 py-3 rounded-xl justify-center hover:text-red-600 flex cursor-pointer items-center gap-2'>View Details <span> <ArrowUpRight size={20} /> </span></p>
    </div>
    </div>
  </div>
);

const Listing: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  return (
    <div className="bg-white py-8 text-black px-3 md:px-6 lg:px-12">
      <div className="flex gap-4 py-5 items-center">
        <div className="p-1 h-3 w-3 rounded-full bg-red-600"></div>
        <h2>Listings</h2>
      </div>

      <div className="grid gap-4">
        {apartmentData.map((category, index) => (
          <div key={index} className="grid gap-4">
            <div 
              className="cursor-pointer flex justify-between border-b border-solid border-zinc-400 pb-3"
              onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
            >
              <div className="grid w-[80%]">
                <h3 className="text-black font-semibold text-3xl">{category.title}</h3>
                <p className="text-red-500 py-1 font-semibold">
                  {category.available} Units Available
                </p>
              </div>

              <div className="w-[20%] flex justify-end">
                <div className={`rounded-full p-3 border h-fit border-solid border-black transform transition-transform duration-300 ${expandedCategory === index ? 'rotate-180' : ''}`}>
                  <ChevronDown size={24} />
                </div>
              </div>
            </div>

            <div className={`grid gap-4 transition-all duration-300 ${
              expandedCategory === index 
                ? 'opacity-100 max-h-[1000px]' 
                : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
              {category.properties.map((property, propIndex) => (
                <ListingCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;