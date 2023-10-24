import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const [foodname, setFoodName] = useState('')
    const [foodtype, setFoodType] = useState('')
    const [foodimage, setFoodImage] = useState('')
    const [foodprice, setFoodPrice] = useState('')


    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    })


    useEffect(() => {
        axios.get(`http://localhost:4000/fooditems/${id}`)
            .then((response) => {
                setFoodName(response.data.foodname);
                setFoodType(response.data.foodtype);
                setFoodImage(response.data.foodimage);
                setFoodPrice(response.data.foodprice);
            })
    }, [id])

    const handleUpdate = () => {
        const data = {
            foodname,
            foodtype,
            foodimage,
            foodprice
        }
        axios.put(`http://localhost:4000/fooditems/${id}`, data).then(() => {
            navigate('/zomato/food/dharmshala')
        })
    }
    return (
        <div className='flex flex-col items-center justify-center h-[90vh] bg-[url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")]'>
            <div className='py-2 w-[500px]'>
                <label htmlFor="" className='text-white'>Itemname:</label>
                <input type="text" value={foodname} onChange={(e) => setFoodName(e.target.value)} className='border border-c border-gray-700 px-4 py-2 w-full rounded-md' />
            </div>
            <div className='py-2 w-[500px]'>
                <label htmlFor="" className='text-white'>ItemType:</label>
                <input type="text" value={foodtype} onChange={(e) => setFoodType(e.target.value)} className='border border-c border-gray-700 px-4 py-2 w-full rounded-md' />
            </div>
            <div className='py-2 w-[500px]'>
                <label htmlFor="" className='text-white'>ItemImage:</label>
                <input type="text" value={foodimage} onChange={(e) => setFoodImage(e.target.value)} className='border border-c border-gray-700 px-4 py-2 w-full rounded-md' />
            </div>
            <div className='py-2 w-[500px]'>
                <label htmlFor="" className='text-white'>ItemPrice:</label>
                <input type="text" value={foodprice} onChange={(e) => setFoodPrice(e.target.value)} className='border border-c border-gray-700 px-4 py-2 w-full rounded-md' />
            </div>
            <div className='py-4 w-[400px]'>
                <button className='bg-green-400 w-full rounded-md py-2 ' onClick={handleUpdate}>Save</button>
            </div>

        </div>
    )
}

export default Update