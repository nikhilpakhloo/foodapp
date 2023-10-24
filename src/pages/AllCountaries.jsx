import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const AllCountries = () => {

  const countries = [
    {
      name: 'India',
      flag: 'https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp',
    },
    {
      name: 'Australia',
      flag: 'https://b.zmtcdn.com/images/flags_z10/au.png?output-format=webp',
    },
    {
      name: 'Brazil',
      flag: 'https://b.zmtcdn.com/images/flags_z10/br.png?output-format=webp',
    },
    {
      name: 'Canada',
      flag: 'https://b.zmtcdn.com/images/flags_z10/ca.png?output-format=webp',
    },
    {
      name: 'Chile',
      flag: 'https://b.zmtcdn.com/images/flags_z10/cl.png?output-format=webp',
    },
    {
      name: 'Czech Republic',
      flag: 'https://b.zmtcdn.com/images/flags_z10/cz.png?output-format=webp',
    },
    {
      name: 'Indonesia',
      flag: 'https://b.zmtcdn.com/images/flags_z10/id.png?output-format=webp',
    },
    {
      name: 'Ireland',
      flag: 'https://b.zmtcdn.com/images/flags_z10/ie.png?output-format=webp',
    },
    {
      name: 'Italy',
      flag: 'https://b.zmtcdn.com/images/flags_z10/it.png?output-format=webp',
    },
    {
      name: 'Lebanon',
      flag: 'https://b.zmtcdn.com/images/flags_z10/lb.png?output-format=webp',
    },
    {
      name: 'Malaysia',
      flag: 'https://b.zmtcdn.com/images/flags_z10/my.png?output-format=webp',
    },
    {
      name: 'Newzealand',
      flag: 'https://b.zmtcdn.com/images/flags_z10/nz.png?output-format=webp',
    },
    {
      name: 'Phillipines',
      flag: 'https://b.zmtcdn.com/images/flags_z10/ph.png?output-format=webp',
    },
    {
      name: 'Poland',
      flag: 'https://b.zmtcdn.com/images/flags_z10/pl.png?output-format=webp',
    },
    {
      name: 'Portugal',
      flag: 'https://b.zmtcdn.com/images/flags_z10/pt.png?output-format=webp',
    },
    {
      name: 'Qatar',
      flag: 'https://b.zmtcdn.com/images/flags_z10/qa.png?output-format=webp',
    },
    {
      name: 'Singapore',
      flag: 'https://b.zmtcdn.com/images/flags_z10/sg.png?output-format=webp',
    },
    {
      name: 'Slovakia',
      flag: 'https://b.zmtcdn.com/images/flags_z10/sk.png?output-format=webp',
    },
    {
      name: 'South Africa',
      flag: 'https://b.zmtcdn.com/images/flags_z10/za.png?output-format=webp',
    },
    {
      name: 'SriLanka',
      flag: 'https://b.zmtcdn.com/images/flags_z10/lk.png?output-format=webp',
    },
    {
      name: 'Turkey',
      flag: 'https://b.zmtcdn.com/images/flags_z10/tr.png?output-format=webp',
    },
    {
      name: 'UAE',
      flag: 'https://b.zmtcdn.com/images/flags_z10/ae.png?output-format=webp',
    },
    {
      name: 'United Kingdom',
      flag: 'https://b.zmtcdn.com/images/flags_z10/gb.png?output-format=webp',
    },
    {
      name: 'United States',
      flag: 'https://b.zmtcdn.com/images/flags_z10/us.png?output-format=webp',
    },
   
  ];

  return (
    <div className='mt-12 md:mx-[190px] md:p-0 p-4'>
      <h1 className='text-4xl font-bold md:text-start text-center'>All Countries</h1>

      <div className='w-full justify-center md:2/2 md:flex md:flex-wrap gap-x-5'>
        {countries.map((country, index) => (
          <div
            key={index}
            className='w-[350px] h-[60px] shadow-sm rounded-md cursor-pointer border border-2 flex items-center justify-between hover:shadow-xl mt-8'
          >
            <div className='flex justify-around items-center gap-x-2 ml-8 '>
              <img src={country.flag} alt='' width={50} />
              <h1 className='text-xl'>{country.name}</h1>
            </div>
            <div className='flex items-center'>
              <button className='mr-8'><AiOutlineRight /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
