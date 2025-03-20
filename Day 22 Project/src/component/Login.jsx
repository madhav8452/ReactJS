import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../../firebaseConfig'
import { ToastContainer, toast, Bounce, Slide, Flip, Zoom } from 'react-toastify';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate(null)

    const handleSubmit = async ()=>{
        try{
            await signInWithEmailAndPassword(auth, email, password)
            .then((res)=>{
                toast.success('Login Successfull', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
                setTimeout(() => {
                    navigate('/dashboard')
                }, 3000);
            })
        }
        catch(error){
            toast.error('Invalid Credential', {
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

    let googleLogin = async () => {
        await signInWithPopup(auth, provider)
        .then((res)=>{
            console.log(res)
            const data = res.user.providerData[0]

            if(data){
                navigate('/dashboard')
            }
        })
    }

    return (
        <div className="p-10 border w-full h-screen bg-[#212121] flex justify-center items-center">
            <div className='flex flex-col items-start border border-[gray] p-10 rounded-lg shadow shadow-[black] shadow-lg'>
                <p className="mb-20 font-bold text-4xl text-white flex justify-between w-full items-center [text-shadow:_0_0_5px_white]">Login <span className='text-sm font-bold cursor-pointer border border-white px-5 py-1 rounded bg-white text-black' onClick={() => { navigate('/') }}>Goto Signup</span></p>
                <input type="text" placeholder="Enter your email" className="text-white w-[300px] h-[40px] rounded ps-5 mb-8 shadow shadow-[0_0_5px_gray] focus:shadow-none focus:outline focus:outline-[gray]" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="text" placeholder="Enter your password" className="text-white w-[300px] h-[40px] rounded ps-5 mb-8 shadow shadow-[0_0_5px_gray] focus:shadow-none focus:outline focus:outline-[gray]" onChange={(e) => { setPassword(e.target.value) }} />
                <div className='w-full flex justify-between items-center'>
                    <button className="border border-white text-white mt-10 mb-10 hover:bg-white hover:text-black w-[100px] h-[40px] rounded cursor-pointer shadow shadow-lg shadow-[black]" onClick={handleSubmit}>Submit</button>
                    <button className='mt-10 mb-10 text-white font-bold bg-[blue] hover:bg-white hover:text-black w-[150px] h-[40px] rounded cursor-pointer shadow shadow-lg shadow-[black]' onClick={googleLogin}>Google</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
