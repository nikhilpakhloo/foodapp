import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Insert = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const [foodname, setfoodname] = useState('')
    const [foodtype, setfoodType] = useState('')
    const [foodprice, setfoodPrice] = useState('')
    const [foodimage, setfoodImage] = useState('')


    const navigate = useNavigate()

    const handleInsert = () => {
        console.log("foodname:", foodname);
        console.log("foodtype:", foodtype);
        console.log("foodprice:", foodprice);
        console.log("foodimage:", foodimage);
        const data ={
            foodname,
            foodtype,
            foodprice,
            'foodimage':foodimage
        }

        console.log(data)

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        axios.post('http://localhost:4000/fooditems', data, config)
            .then(() => {
                navigate('/zomato/food/dharmshala');
            })
            .catch((error) => {
                console.error(error); 
                if (error.response) {
                 
                  console.error("Server Error:", error.response.data);
                  alert("Server Error Internal: " + error.response.data);
                 
                } else if (error.request) {
               
                  console.error("Request Error:", error.request);
                  alert("Request Error: No response received from the server");
                } else {
                 
                  console.error("Other Error:", error.message);
                  alert("Other Error: " + error.message);
                }
              });
    };
    return (
        <form className='h-[90vh] w-full flex flex-col items-center justify-center bg-[url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")]  ' encType="multipart/form-data">
            <div className='mt-3 flex flex-col w-[500px]'>
                <input type="text" className='border border-2 border-gwhite rounded-xl  hover:border-green-500 p-2 ' placeholder='Enter Foodname...' value={foodname} onChange={(e) =>  setfoodname(e.target.value) } />
            </div>
            <div className='mt-8 flex flex-col w-[500px]'>
                <input type="text" className='border border-2 border-white  rounded-xl hover:border-green-500 p-2  ' placeholder='Enter FoodType...' value={foodtype} onChange={(e) => setfoodType(e.target.value)} />
            </div>
            <div className='mt-8 flex flex-col w-[500px]'>
                <input type="text" className='border border-2 border-white  rounded-xl hover:border-green-500 p-2  ' placeholder='Enter FoodPrice...' value={foodprice} onChange={(e) => setfoodPrice(e.target.value)} />
            </div>
            <div className='mt-8 flex flex-col w-[300px]'>
            <input
                type='file'
                accept='image/*'
                onChange={(e) => {
                    console.log(e.target.files[0]);
                    setfoodImage(e.target.files[0]);
                }}
            />
            </div>
            <div className='mt-8 flex flex-col w-[400px]'>
                <button type='button' className='bg-green-400 p-2 rounded-xl hover:bg-green-500' onClick={handleInsert}>Proceed</button>
            </div>
        </form>

    )
}

export default Insert