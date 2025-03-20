import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce, Slide, Flip, Zoom } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';

export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate(null)

    const handleSubmit = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setDoc(doc(db, 'users', res.user.uid), { username, email })
                navigate('/login')
            })
        }
        catch (error) {
            toast.error('Invalid Credentials', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
    }

    return (
        <div className="p-10 border w-full h-screen bg-[#212121] flex justify-center items-center">
            <div className='flex flex-col items-start border border-[gray] p-10 rounded-lg shadow shadow-[black] shadow-lg'>
                <p className="mb-20 font-bold text-4xl text-white flex justify-between w-full items-center [text-shadow:_0_0_5px_white]">Signup <span className='text-sm font-bold cursor-pointer border border-white px-5 py-1 rounded bg-white text-black' onClick={() => { navigate('/login') }}>Goto Login</span></p>
                <input type="text" placeholder='Enter your username' className="text-white w-[300px] h-[40px] rounded ps-5 mb-8 shadow shadow-[0_0_5px_gray] focus:shadow-none focus:outline focus:outline-[gray]" onChange={(e) => { setUsername(e.target.value) }} />
                <input type="text" placeholder="Enter your email" className="text-white w-[300px] h-[40px] rounded ps-5 mb-8 shadow shadow-[0_0_5px_gray] focus:shadow-none focus:outline focus:outline-[gray]" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="text" placeholder="Enter your password" className="text-white w-[300px] h-[40px] rounded ps-5 mb-8 shadow shadow-[0_0_5px_gray] focus:shadow-none focus:outline focus:outline-[gray]" onChange={(e) => { setPassword(e.target.value) }} />
                <button className="border border-white text-white mt-10 mb-10 hover:bg-white hover:text-black  w-[100px] h-[40px] rounded cursor-pointer shadow shadow-lg shadow-[black]" onClick={handleSubmit}>Submit</button>
            </div>
            <ToastContainer />
        </div>
    )
} 2