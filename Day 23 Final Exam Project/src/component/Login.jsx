import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfige'
import { useNavigate } from 'react-router-dom'

function Login() {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    useEffect(()=>{
        onAuthStateChanged(auth, (state)=>{
            console.log(state)
        })
    })

    let handleSubmit = async()=>{
        await signInWithEmailAndPassword(auth, email, password)
        .then((res)=>{
            navigate('/')
        })
    }
    return (
        <div className='w-full h-screen'>
            <Navbar></Navbar>
            <div className='w-full h-[86vh] flex justify-center items-center'>
                <div className='border border-[gray] w-[30%] h-[90%] rounded-lg p-10'>
                    <p className='text-white font-bold text-4xl mb-10'>Login</p>
                    <p className='text-[gray] mb-3'>Email</p>
                    <input type="text" placeholder='Enter Username' className='border border-[gray] w-full h-[50px] rounded ps-5 mb-5 text-white' onChange={(e) => { setEmail(e.target.value) }} />
                    <p className='text-[gray] mb-3'>Password</p>
                    <input type="text" placeholder='Enter Username' className='border border-[gray] w-full h-[50px] rounded ps-5 mb-5 text-white' onChange={(e) => { setPassword(e.target.value) }} />
                    <button className='border border-[gray] w-[100px] h-[40px] rounded text-[gray] cursor-pointer mt-20' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>

    )
}

export default Login
