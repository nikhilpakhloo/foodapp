import React from 'react'

const PopularLocation = () => {
    return (
        <div className='mt-12 flex flex-col justify-center items-center'>
            <div className='flex md:flex-row flex-col md:px-0 px-4 items-center'>
                <h1 className='md:text-4xl text-2xl font-light mr-3'>Popular Locations in</h1>
                <img src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp" alt="" className='md:w-15 md:h-10 w-10 h-8 '/>
                <h1 className='md:text-4xl text-2xl  font-bold ml-3'>India.</h1>
            </div>
            <div className='md:w-1/2 md:mt-12 mt-6 md:p-0 p-4' >
                <p className='text-center text-xl text-gray-500'>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
            </div>



        </div>

    )
}

export default PopularLocation