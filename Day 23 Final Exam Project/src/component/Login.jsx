import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfige'

function Login() {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let handleSubmit = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    alert('Login Successfull')
                    localStorage.setItem('isAuthenticated', 'true')
                    navigate('/')
                })
        }
        catch (error) {
            alert('Invalid Credentials')
        }
    }

    return (
        <div className='w-full h-screen'>
            <Navbar></Navbar>
            <div className='w-full h-[86vh] flex justify-center items-center'>
                <div className='border border-[gray] w-[28%] h-[90%] rounded-lg p-10'>
                    <p className='text-white font-bold text-4xl mb-10'>Login</p>
                    <p className='text-[gray] mb-3'>Email</p>
                    <input type="text" placeholder='Enter Username' className='border border-[gray] w-full h-[50px] rounded ps-5 mb-4 text-white' onChange={(e) => { setEmail(e.target.value) }} />
                    <p className='text-[gray] mb-3'>Password</p>
                    <input type="text" placeholder='Enter Username' className='border border-[gray] w-full h-[50px] rounded ps-5 mb-4 text-white' onChange={(e) => { setPassword(e.target.value) }} />
                    <div className='mt-30 flex justify-between items-center'>
                        <button className='border border-[gray] w-[100px] h-[40px] rounded text-[gray] cursor-pointer hover:bg-white hover:text-black' onClick={handleSubmit}>Submit</button>
                        <p className='text-white text-sm cursor-pointer hover:text-[gray]' onClick={() => { navigate('/signup') }}>New User? Signup</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
