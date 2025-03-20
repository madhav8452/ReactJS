import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbarcode(prop){
  let [toggle, setToggle] = useState(true)

  let handletoggle = ()=>{
    setToggle(!toggle)
  }

  return (
    <div className='w-full h-[100px] bg-black flex justify-between'>
        <div className='w-[200px] h-full flex justify-center items-center'>
          <img src="https://www.district.in/assets/images/logo/district-logo-light.svg" alt="" />
        </div>
        { !toggle 
        ? <div className='w-[60%] flex justify-evenly items-center relative'>
            <p className='text-white w-[150px] h-[40px] bg-[#212121] rounded-full flex justify-center items-center cursor-pointer font-bold' onClick={prop.allFilter} ref={prop.all}><i className="fa-solid fa-reply-all me-3"></i>All</p>
            <p className='text-white w-[150px] h-[40px] bg-[#212121] rounded-full flex justify-center items-center cursor-pointer font-bold' onClick={prop.eventFilter} ref={prop.event}><i className="fa-solid fa-guitar me-3"></i>Events</p>
            <p className='text-white w-[150px] h-[40px] bg-[#212121] rounded-full flex justify-center items-center cursor-pointer font-bold' onClick={prop.movieFilter} ref={prop.movie}><i className="fa-solid fa-film me-3"></i>Movies</p>
            <p className='text-white w-[150px] h-[40px] bg-[#212121] rounded-full flex justify-center items-center cursor-pointer font-bold' onClick={prop.diningFilter} ref={prop.dining}><i className="fa-solid fa-utensils me-3"></i>Dining</p>
            <p className='text-white w-[150px] h-[40px] bg-[#212121] rounded-full flex justify-center items-center cursor-pointer font-bold' onClick={prop.handleSearch}><i className="fa-solid fa-magnifying-glass me-3"></i>Search</p>
            
            <div className='absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center hidden' ref={prop.searchRef}>
              <div className='border border-white ps-5 rounded-full'>
                <i className="fa-solid fa-magnifying-glass text-white me-3"></i>
                <input type="text" className='w-[500px] h-[40px] text-white ps-3 outline-none text-xs' placeholder='Search Events, Movies or Dining' onChange={prop.handleChange}/>
              </div>
              <i className="fa-solid fa-xmark text-white ms-5 w-[40px] h-[40px] rounded-lg bg-[#212121] cursor-pointer" style={{display: 'flex', justifyContent : 'center', alignItems : 'center'}} onClick={prop.handleClose}></i>
            </div>
          </div>
        : null 
        }
        <div className='w-[15%] h-full flex justify-center items-center'>
          <Link to={toggle ? '/event' : '/'}><button className='text-white w-[100px] h-[40px] bg-[#212121] rounded-md cursor-pointer hover:bg-white hover:text-black' onClick={handletoggle}>{toggle ? 'Event' : 'Form'}</button></Link>
        </div>
    </div>
  )
}

export default Navbarcode
