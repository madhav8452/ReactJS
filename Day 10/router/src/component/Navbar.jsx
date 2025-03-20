import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='w-[100%] h-[100px] flex justify-center items-center'>
        <ul className='w-[500px] h-[100%] flex justify-evenly items-center font-bold'>
            <li><NavLink className={({isActive})=> isActive ? 'border border-black ps-3 pe-3 pt-1 pb-1 rounded bg-black text-white' : ''} to='/'>Home</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? 'border border-black ps-3 pe-3 pt-1 pb-1 rounded bg-black text-white' : ''} to='/about'>About</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? 'border border-black ps-3 pe-3 pt-1 pb-1 rounded bg-black text-white' : ''} to='/form'>Form</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? 'border border-black ps-3 pe-3 pt-1 pb-1 rounded bg-black text-white' : ''} to='/product'>Product</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? 'border border-black ps-3 pe-3 pt-1 pb-1 rounded bg-black text-white' : ''} to='/materialUI'>Material-UI</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar
