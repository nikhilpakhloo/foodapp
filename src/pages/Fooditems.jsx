import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IoMdAddCircleOutline } from 'react-icons/io'

const Fooditems = () => {
  const [foodItems, setFoodItems] = useState([])
  useEffect(() => {
    window.scrollTo(0,0)

    axios.get('http://localhost:4000/fooditems')
      .then((response) => {
        setFoodItems(response.data.data)
      })
  }, [])
  console.log(foodItems)
  return (
    <>
      <div className='bg-gray-100 mt-12'>
        <div className='h-full flex flex-col md:mx-[190px] '>
          <div className='md:mt-6'>
            <h1 className='md:text-3xl text-2xl md:text-start text-center '>Eat what makes you Happy</h1>
          </div>
          <div className='flex md:flex-row flex-col items-center mt-10 md:gap-x-10 gap-y-6'>
            <div className='flex '>
              <img src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" alt="" width={160} />
            </div>
            <div className=''>
              <img src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="" width={160} className='rounded-full' />
            </div>
            <div className='flex'>
              <img src="https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png" alt="" width={160} className='rounded-full' />
            </div>
            <div className='flex '>
              <img src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" alt="" width={160} />
            </div>
            <div className='flex '>
              <img src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" alt="" width={160} />
            </div>
            <div className='flex '>
              <img src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" alt="" width={160} />
            </div>
          </div>
          <div className='md:mt-6 mt-4'>
            <h1 className='text-3xl md:text-start text-center'>Top Brands for you</h1>
          </div>

          <div className='flex md:flex-row flex-col items-center mt-8 md:gap-x-8 gap-y-8 '>

            <div className='flex flex-col '>
              <img src="https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613211191.png" alt="" width={160} className='rounded-full' />
              <h1 className='text-center'>Pizza hut</h1>
              <span className='text-sm text-gray-500 text-center'>28 mins</span>
            </div>
            <div className='flex flex-col '>
              <img src="https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1550060536.png" alt="" width={160} className='rounded-full' />
              <h1 className='text-center'>Dominos Pizza</h1>
              <span className='text-sm text-gray-500 text-center'>25 mins</span>
            </div>
            <div className='flex flex-col '>
              <img src="https://b.zmtcdn.com/data/brand_creatives/logos/b5a6a71ee75fcaa771f63d2cdbb25eca_1683098718.png" alt="" width={160} className='rounded-full' />
              <h1 className='text-center'>Baskin Robbins -<br /> Ice Cream Desserts</h1>
              <span className='text-sm text-gray-500 text-center'>24 mins</span>
            </div>
            <div className='flex flex-col '>
              <img src="https://b.zmtcdn.com/data/brand_creatives/logos/1e0336bcbd754fb263286d7893e46ac1_1632983299.png" alt="" width={160} className='rounded-full' />
              <h1 className='text-center'>Melted Cheese Cafe</h1>
              <span className='text-sm text-gray-500 text-center'>37 mins</span>
            </div>
            <div className='flex flex-col '>
              <img src="https://b.zmtcdn.com/data/brand_creatives/logos/03e60b7cf092594ab6081704c1dbcf15_1536727017.png" alt="" width={160} className='rounded-full' />
              <h1 className='text-center'>Cafe Coffee Day</h1>
              <span className='text-sm text-gray-500 text-center'>22 mins</span>
            </div>
            <div className='flex flex-col '>
              <img src="https://b.zmtcdn.com/data/brand_creatives/logos/09385bc255d6c79564472cef230040f6_1591776303.png" alt="" width={160} className='rounded-full' />
              <h1 className='text-center'>Rahi Cafe</h1>
              <span className='text-sm text-gray-500 text-center'>48 mins</span>
            </div>
          </div>
          <div className='mt-6 flex items-center justify-between'>
            <h1 className='text-3xl md:text-start text-center'>Delivery Restaurants in Dharamshala</h1>
            <Link to="/insert/fooditems">
              <button className='text-blue-500 text-4xl'><IoMdAddCircleOutline /></button>
            </Link>
          </div>

          <div className='flex flex-wrap justify-center gap-10 mt-10 h-full '>
            {foodItems.map((food) => (
              <div className='w-[350px] h-[400px] shadow-md rounded-xl flex hover:shadow-xl cursor-pointer justify-center  '>


                <>
                  <div className='p-2'>
                    <img src={`http://localhost:4000/${food.foodimage}`} className='rounded-xl  w-[350px] h-[300px] object-cover' alt='food' />
                    <div className='flex items-center justify-between px-4 '>
                      <div className=' flex flex-col mt-6'>
                        <span className=' font-bold'>{food.foodname}</span>

                        <span className=''>{food.foodtype}</span>
                      </div>
                    
                      <div className='flex flex-col items-center justify-center mt-6'>
                        <span className=' '>₹{food.foodprice} for one</span>
                        <div className=' flex gap-x-2'>
                          <Link to={`/update/fooditems/${food._id}`}>

                            <button className='text-green-500'><AiFillEdit /></button>
                          </Link>
                          <Link to={`/delete/fooditems/${food._id}`}>
                            <button href="" className='text-red-500'><AiFillDelete /></button>
                          </Link>
                        </div>


                      </div>
                    </div>
                  </div>

                </>





              </div>
            ))}
          </div>
        </div>
      </div >
    </>
  )
}

export default Fooditems