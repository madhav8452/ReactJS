import React from 'react'

function Footer(){
  return (
    <div className='border border-black w-full h-[100px] bg-black text-white flex justify-between'>
        <div className='w-[30%] h-full flex justify-evenly items-center'>
            <p className='cursor-pointer'>Terms & Conditions</p>
            <p className='cursor-pointer'>Privacy Policy</p>
            <p className='cursor-pointer'>Contact Us</p>
        </div>
        <div className='w-[20%] h-full flex justify-evenly items-center'>
            <i className="fa-brands fa-facebook-f cursor-pointer w-[50px] h-[50px] border border-white text-lg bg-white text-black rounded-full" style={{display : 'flex' , justifyContent : 'center', alignItems : 'center'}}></i>
            <i className="fa-brands fa-instagram cursor-pointer w-[50px] h-[50px] border border-white text-lg bg-white text-black rounded-full" style={{display : 'flex' , justifyContent : 'center', alignItems : 'center'}}></i>
            <i className="fa-brands fa-x-twitter cursor-pointer w-[50px] h-[50px] border border-white text-lg bg-white text-black rounded-full" style={{display : 'flex' , justifyContent : 'center', alignItems : 'center'}}></i>
            <i className="fa-brands fa-youtube cursor-pointer w-[50px] h-[50px] border border-white text-lg bg-white text-black rounded-full" style={{display : 'flex' , justifyContent : 'center', alignItems : 'center'}}></i>
        </div>
    </div>
  )
}

export default Footer
