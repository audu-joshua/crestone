import React from 'react';
import { Property } from '@/utils/types';
import { Share2, Heart,LocateFixedIcon, Bluetooth, ChartLine, BoxIcon, Bed, BedIcon, LucidePersonStanding, CatIcon, HomeIcon, CloudRainIcon, LandPlotIcon, ChevronDown, List  } from 'lucide-react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PricingBlock from './pricing';
import ContactInfoCard from './card';
import Listing from '.';


const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;


interface OverviewProps {
  property: Property;
}

const Overview: React.FC<OverviewProps> = ({ property }) => {
  return (
    <div className="bg-white p-3 md:p-6 rounded-lg shadow-md">
      <div className=' md:flex md:justify-between md:gap-4'>
        <div className=' md:w-full'>
          <div className=''>
          <img src={property.image} className=' w-full rounded-2xl'></img>

          <div className='my-4 flex justify-between'>
            <p className=' p-2 px-4 border bprder-solid flex items-center  border-gray-500 rounded-2xl w-fit'> {property.type} </p>

            <div className='flex gap-2 justify-between'> 
              <div className='p-4 border border-solid border-gray-500 rounded-full '> <Share2  size={20}/> </div>
              <div className='p-4 border border-solid border-red-600 bg-red-100 rounded-full'><Heart color='red' fill='red'  size={20}/> </div>
            </div>
          </div>

          <div className='grid'>
            <h3 className='text-xl font-semibold pb-4'>{property.price}</h3>
            <div>
              <div className=' flex gap-2'>
                <LocateFixedIcon/>
                <p className='text-gray-400 pb-4'> {property.address}</p>
              </div>
              <p className=' py-2 px-6 border border-solid bg-[#f4f2f2]  border-gray-500 rounded-full w-fit'> {property.status}</p>
            </div>

            <div>
              <h3 className='text-xl font-semibold py-4'> Discription </h3>
              <p> {property.description}</p>
            </div>
          </div>

          <div >
              <h3 className='text-xl font-semibold py-4'> Facilities </h3>
              <div className=' p-4 grid grid-cols-2 md:grid-cols-3  gap-6 border border-solid border-[#D8D8D8] rounded-xl'>
                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <Bluetooth color='red' fill='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>Built</p>
                      <p className=' font-semibold text-sm'>{property.builtIn}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <ChartLine color='red' fill='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>stairs</p>
                      <p className=' font-semibold text-sm'>{property.stairs}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <BoxIcon color='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>3D</p>
                      <p className=' font-semibold text-sm'>{property.threeDplan}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <BedIcon color='red' fill='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>Living Room</p>
                      <p className=' font-semibold text-sm'>{property.livingRoom}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <Bluetooth color='red' fill='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>Condition</p>
                      <p className=' font-semibold text-sm'>{property.condition}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <Bed color='red' fill='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>Bedroom</p>
                      <p className=' font-semibold text-sm'>{property.bedroom}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <LucidePersonStanding color='red' fill='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>Buit By</p>
                      <p className=' font-semibold text-sm'>{property.builtBy}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <CatIcon color='red' fill='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>Pets allowed</p>
                      <p className=' font-semibold text-sm'>{property.petsAllowed}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <HomeIcon color='red' fill='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>Bathroom</p>
                      <p className=' font-semibold text-sm'>{property.bathroom}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <LandPlotIcon color='red' fill='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>Size</p>
                      <p className=' font-semibold text-sm'>{property.propertySize}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <HomeIcon color='red' fill='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>Floors</p>
                      <p className=' font-semibold text-sm'>{property.propertyFloors}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <CloudRainIcon color='red' fill='red'  size={15}/>
                    </div>
                    <div className='grid'>
                      <p className='text-gray-500 text-xs'>Bathroom</p>
                      <p className=' font-semibold text-sm'>{property.bathroom}</p>
                    </div>
                  </div>        
              </div>
          </div>

          <div >
              <h3 className='text-xl font-semibold py-4'> Reasons to Invest </h3>
              <div className='grid gap-4'>
                <div className='flex gap-4 p-2 border border-solid border-[#D8D8D8] rounded-xl'>
                <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <ChevronDown color='red' fill='red'  size={15}/>
                    </div>
                    <p>
                    Smart Home Technology
                    </p>
                </div>

                <div className='flex gap-4 p-2 border border-solid border-[#D8D8D8] rounded-xl'>
                <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <ChevronDown color='red' fill='red'  size={15}/>
                    </div>
                    <p>
                    Estimated rental income of $20,000/month
                    </p>
                </div>

                <div className='flex gap-4 p-2 border border-solid border-[#D8D8D8] rounded-xl'>
                <div className='p-2 flex w-8 h-8 justify-center items-center border border-solid border-red-600 bg-red-100 rounded-full'>
                    <ChevronDown color='red' fill='red'  size={15}/>
                    </div>
                    <p>
                    Projected ROI of 7%
                    </p>
                </div>
              </div>
          </div>
          </div>
        </div>

      {/* Map Session */}
        <div className=' md:w-[70%] py-4 md:py-0 h-full grid gap-4'>
        {property.mapCoordinates && (
        <div className=" w-full">
          <div className=" h-64 md:h-96 w-full rounded-lg overflow-hidden">
            <Map
              initialViewState={{
                latitude: property.mapCoordinates.lat,
                longitude: property.mapCoordinates.lng,
                zoom: 12,
              }}
              mapboxAccessToken={MAPBOX_TOKEN}
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              <Marker
                longitude={property.mapCoordinates.lng}
                latitude={property.mapCoordinates.lat}
                anchor="bottom"
              >
                <div className="p-2 bg-red-600 rounded-full">
                  <HomeIcon size={20} color="white" />
                </div>
              </Marker>
            </Map>
          </div>
        </div>
      )}
        <PricingBlock/>
        <ContactInfoCard/>
        </div>
      </div>
      <Listing/>
    </div>
  );
};

export default Overview;