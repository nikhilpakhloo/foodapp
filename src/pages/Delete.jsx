import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios  from 'axios'

const Delete = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        window.scrollTo(0,0)

    },[])
    const handledelete = ()=>{
   
      axios.delete(`http://localhost:4000/fooditems/${id}`)
      .then(()=>{
      
        navigate('/zomato/food/dharmshala')
      })
      .catch((error)=>{
       
        alert("Error occured")
        console.error(error)
      })
    }
    return (
        <div className='h-screen flex items-center justify-center'>
          
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1 className='text-2xl text-gray-700'>Are you sure you want to <span className='text-red-500 text-2xl'>DELETE</span> this book?</h1>
                <button className='my-3 py-3 rounded-xl px-12 bg-red-500' onClick={handledelete}>Delete</button>


            </div>
        </div>
    )
}

export default Delete