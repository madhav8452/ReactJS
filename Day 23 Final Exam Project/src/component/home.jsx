import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../firebaseConfige'
import { doc, getDoc } from 'firebase/firestore'

function Home() {
    let [uid, setUid] = useState('')
    let [username, setUsername] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid)
            }
        })
    })

    useEffect(() => {
        if (uid) {
            fetchUser()
        }
    }, [uid])

    let fetchUser = async () => {
        await getDoc(doc(db, 'username', uid))
            .then((res) => {
                setUsername(res.data().username)
            })
    }

    return (
        <div className='w-full h-screen'>
            <Navbar></Navbar>
            <div className='w-full h-[86vh] flex flex-col justify-center items-center'>
                <p className='border border-[gray] text-[gray] mb-10 font-bold border border-white w-[150px] h-[50px] rounded flex justify-center items-center'>Hi, {username}</p>
                <p className='text-[gray] text-4xl font-bold tracking-widest'>HOTEL MANAGEMENT</p>
            </div>
        </div>
    )
}

export default Home
