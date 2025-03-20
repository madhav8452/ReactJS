import axios from 'axios'
import React, { useState } from 'react'

function Signup() {
    let [state, setState] = useState({
        username : '',
        email : '',
        password : ''
    })

    let handleChange = (e)=>{
        let {name, value} = e.target

        setState({...state, [name] : value})
    }

    let handleSubmit = (e)=>{
        e.preventDefault()

        axios.post(`http://localhost:3000/user`, state)
    }
    
  return (
        <form action="" className='flex flex-col items-start' onSubmit={handleSubmit}>
            <p className='font-bold'>Signup</p>
            <input type="text" placeholder='enter username' className='border border-black' name='username' onChange={handleChange}/>
            <input type="text" placeholder='enter email' className='border border-black' name='email' onChange={handleChange}/>
            <input type="text" placeholder='enter password' className='border border-black' name='password' onChange={handleChange}/>
            <input type="submit" className='border border-black'/>
        </form>  
    )
}

export default Signup
