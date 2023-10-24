import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const LocationList = () => {

  const outlets = [


    {
      name: "Dharmshala Restaurants",

    },
    {
      name: "Ahmedabad Restaurants",

    },
    {
      name: "Ajmer Restaurants",

    },
    {
      name: "Allapuza Restaurants",

    },
    {
      name: "Allahabad Restaurants",

    },
    {
      name: "Amravati Restaurants",

    },
    {
      name: "Amritsar Restaurants",

    },
    {
      name: "Aurangabad Restaurants",

    },
    {
      name: "Bengaluru Restaurants",

    },
    {
      name: "Bhopal Restaurants",

    },
    {
      name: "Bhubaneshwar Restaurants",

    },
    {
      name: "Chandigarh Restaurants",

    },
    {
      name: "Chennai Restaurants",

    },
    {
      name: "Coimbtore Restaurants",

    },
    {
      name: "Cuttack Restaurants",

    },
    {
      name: "Darjelling Restaurants",

    },
    {
      name: "Dehradun Restaurants",

    },
    {
      name: "Delhi NCR Restaurants",

    },
    {
      name: "Agra Restaurants",

    },
    {
      name: "Gangtok Restaurants",

    },
    {
      name: "Goa Restaurants",

    },

  ]


  return (
    <>
      <div className='mt-12 w-full flex justify-center items-center md:px-[40px] gap-x-5 gap-y-8 flex-wrap md:p-0 pd-4'>
        {outlets.map((outlet, index) => (
          <Link key={index} to='zomato/food/dharmshala'>
            <div className='w-[350px] h-[60px] shadow-sm rounded-md border border-2 flex items-center justify-around hover:shadow-xl cursor-pointer'>
              <h1 className='text-xl'>{outlet.name}</h1>
              <button><AiOutlineRight /></button>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default LocationList