import React, { useState } from 'react'
import Navbar from './navbar'

function ReservationForm() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [date, setDate] = useState('')
     
    return (
    <div className='w-full'>
      <Navbar></Navbar>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='border border-[gray] w-[30%] h-[90%] rounded-lg p-10 flex flex-col items-start'>
            <p className='text-white text-xl font-bold mb-5'>Reservation Form</p>
            <p className='text-[gray] mb-3'>Name</p>
            <input type="text" placeholder='Enter Your Name' className='border border-[gray] w-full h-[40px] rounded ps-5 text-white mb-4'/>
            <p className='text-[gray] mb-3'>Email</p>
            <input type="text" placeholder='Enter Your Email' className='border border-[gray] w-full h-[40px] rounded ps-5 text-white mb-4'/>
            <p className='text-[gray] mb-3'>Date</p>
            <input type="date"  className='border border-[gray] w-full h-[40px] rounded ps-5 text-white mb-4'/>
            <p className='text-[gray] mb-3'>Number of Guest</p>
            <input type="text" placeholder='Enter Number Your Guest' className='border border-[gray] w-full h-[40px] rounded ps-5 text-white mb-4'/>
            <p className='text-[gray] mb-3'>Prefered Room Type</p>
            <select name="" id="" className='text-white bg-[#212121]'>
                <option value="">Single</option>
                <option value="">Double</option>
                <option value="">Suits</option>
            </select>
            <button className='border border-white w-[100px] h-[40px] rounded mt-5 text-white cursor-pointer'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ReservationForm
