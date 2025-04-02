import React, { useState } from 'react'
import Navbar from './navbar'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebaseConfige'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'

function Signup() {
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let handleSubmit = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setDoc(doc(db, 'username', res.user.uid), { username, email })
                navigate('/login')
            })
    }

    return (
        <div className='w-full h-screen'>
            <Navbar></Navbar>
            <div className='w-full h-[86vh] flex justify-center items-center'>
                <div className='border border-[gray] w-[28%] h-[90%] rounded-lg p-10'>
                    <p className='text-white font-bold text-4xl mb-10'>Signup</p>
                    <p className='text-[gray] mb-3'>Username</p>
                    <input type="text" placeholder='Enter Username' className='border border-[gray] w-full h-[50px] rounded ps-5 mb-4 text-white' onChange={(e) => { setUsername(e.target.value) }} />
                    <p className='text-[gray] mb-3'>Email</p>
                    <input type="text" placeholder='Enter Username' className='border border-[gray] w-full h-[50px] rounded ps-5 mb-4 text-white' onChange={(e) => { setEmail(e.target.value) }} />
                    <p className='text-[gray] mb-3'>Password</p>
                    <input type="text" placeholder='Enter Username' className='border border-[gray] w-full h-[50px] rounded ps-5 mb-4 text-white' onChange={(e) => { setPassword(e.target.value) }} />
                    <div className='mt-10 flex justify-between items-center'>
                        <button className='border border-[gray] w-[100px] h-[40px] rounded text-[gray] cursor-pointer hover:bg-white hover:text-black' onClick={handleSubmit}>Submit</button>
                        <p className='text-white text-sm cursor-pointer hover:text-[gray]' onClick={() => { navigate('/login') }}>Already have a account? Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
