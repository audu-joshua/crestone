import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'


export default function MultiFamily() {
  return (
    <div className=' grid'>
    <div className='flex'>
      <div className='flex'>
            <img/>
            <div className='grid'>
                <h3> Riverview Apartments </h3>
                <p> For Rent</p>
                <p> 123 Hauptstraße, Berlin 10115, Germany </p>
            </div>
      </div>

      <div>
        <p> Multi Family </p>
      </div>

      <div>
        <p> $1,100 - $5,000/month </p>
      </div>

    <div>
        <p>
            View Details
        </p>
        <BsArrowUpRight/>
    </div> 
    </div>

    <div className='flex'>
      <div className='flex'>
            <img/>
            <div className='grid'>
                <h3> Riverview Apartments </h3>
                <p> For Rent</p>
                <p> 123 Hauptstraße, Berlin 10115, Germany </p>
            </div>
      </div>

      <div>
        <p> Multi Family </p>
      </div>

      <div>
        <p> $1,100 - $5,000/month </p>
      </div>

    <div>
        <p>
            View Details
        </p>
        <BsArrowUpRight/>
    </div> 
    </div>
    </div>
  )
}
