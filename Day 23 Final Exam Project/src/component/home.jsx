import React, { useEffect, useState } from 'react'
import Navbar from './navbar'

function Home() {

    return (
        <div className='w-full h-screen'>
            <Navbar></Navbar>
            <div className='w-full h-[86vh] flex flex-col justify-center items-center'>
                <p className='text-[gray] text-4xl font-bold tracking-widest'>HOTEL MANAGEMENT</p>
            </div>
        </div>
    )
}

export default Home
