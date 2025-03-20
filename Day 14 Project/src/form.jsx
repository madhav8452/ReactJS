import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FormData(){
  let [formData, setFormData] = useState({
    title : '',
    category : '',
    price : '',
    image : ''
  })

  let handleChange = (e)=>{
    let {name, value} = e.target

    setFormData({...formData, [name] : value})
  }

  let handleSubmit = (e)=>{
    e.preventDefault()

    axios.post(`http://localhost:3000/Event`, formData)

    setFormData({
      title : '',
      category : '',
      price : '',
      image : ''
    })  
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover' style={{backgroundImage : 'URL(https://www.district.in/assets/images/background-placeholder.png)'}}>
        <form action="" className='border border-black w-[450px] h-[650px] rounded-2xl bg-black text-white flex flex-col p-10' onSubmit={handleSubmit}>
            <p className='text-4xl mt-5 mb-10'>Form</p>
            <label htmlFor="" className='mb-2'>Title</label>
            <input type="text" placeholder='Enter Title' className='border border-white w-full h-[40px] ps-5 rounded-md mb-5' name='title' value={formData.title} onChange={handleChange}/>
            <label htmlFor="" className='mb-2'>Category</label>
            <input type="text" placeholder='Enter Category' className='border border-white w-full h-[40px] ps-5 rounded-md mb-5' name='category' value={formData.category} onChange={handleChange}/>
            <label htmlFor="" className='mb-2'>Price</label>
            <input type="text" placeholder='Enter Price' className='border border-white w-full h-[40px] ps-5 rounded-md mb-5' name='price' value={formData.price} onChange={handleChange}/>
            <label htmlFor="" className='mb-2'>Image Source</label>
            <input type="text" placeholder='Enter Image source' className='border border-white w-full h-[40px] ps-5 rounded-md mb-5' name='image' value={formData.image} onChange={handleChange}/>
            <input type="Submit" className='border border-white rounded-md w-[150px] h-[40px] cursor-pointer hover:bg-white hover:text-black mt-10'/>
        </form>
    </div>
  )
}

export default FormData
