import React from 'react'

import { Link, Outlet } from 'react-router-dom'

const Restaurant = () => {
    return (
        <>
            <div className='md:mx-[190px] mt-8 flex flex-col   '>
                <Link to="/">
                    <div className='flex justify-center'>
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" className='w-[200px]' />
                    </div>
                </Link>


                <div className='flex mt-4 md:gap-x-24 md:flex-row flex-col items-center gap-y-5 '>


                    <Link to='/zomato/food/dharmshala'>
                        <div className='flex items-center gap-x-2 mt-8 '>
                            <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" alt="" width={50} className='hover:bg-yellow-200 bg-gray-300 rounded-full p-2' />
                            <h1 className='text-2xl'>Delivery</h1>
                        </div>
                    </Link>




                </div>


            </div>
            <hr className='w-full mt-5'></hr>
            <Outlet />


        </>
    )
}

export default Restaurant;