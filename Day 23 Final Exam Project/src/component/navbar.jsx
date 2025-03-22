import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (
        <header className='w-full h-[100px] flex justify-center relative'>
            <ul className='w-[50%] h-full flex justify-evenly items-center text-white font-bold cursor-pointer'>
                <li className='hover:text-[gray]' onClick={() => { navigate('/') }}>Home</li>
                <li className='hover:text-[gray]' onClick={() => { navigate('/reservationForm') }}>Reservation Form</li>
                <li className='hover:text-[gray]' onClick={() => { navigate('/reservationList') }}>Reservation List</li>
            </ul>
            <button className='absolute right-10 top-8 border border-[blue] w-[100px] h-[40px] rounded bg-[blue] text-white font-bold cursor-pointer text-sm' onClick={() => { navigate('/signup') }}>Signup</button>
        </header>
    )
}

export default Navbar
