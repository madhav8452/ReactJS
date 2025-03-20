import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    let [state, setState] = useState({
        email : '',
        password : ''
    })

    let navigate = useNavigate()

    let handleChange = (e)=>{
        let {name, value} = e.target

        setState({...state, [name] : value})
    }

    let handleSubmit=(e)=>{
        e.preventDefault()

        axios.get(`http://localhost:3000/user?email=${state.email}`)
        .then((res)=>{
            if(res.data.length == 0){
                alert("Email not found")
            }
            else{
                if(res.data[0].password == state.password){
                    alert("login successfull")

                    localStorage.setItem("isLoggedIn", true)
                    localStorage.setItem("userName", res.data[0].username)

                    navigate('/')
                    // axios.get(`http://localhost:3000/isLoggedIn`)
                    // .then((res)=>{
                    //     if(res.data.length > 0){
                    //         axios.delete(`http://localhost:3000/isLoggedIn/${res.data[0].id}`)
                    //     }
                    // })
                    // .then(()=>{
                    //     axios.post(`http://localhost:3000/isLoggedIn`, { loggedIn : 'true', userEmail : res.data[0].email})
                    // })
                }    
                else{
                    alert("password wrong")
                }
            }
        })


    }

  return (
    <form action="" className='flex flex-col items-start' onSubmit={handleSubmit}>
        <p className='font-bold'>Login</p>
        <input type="text" placeholder='enter email' className='border border-black' name='email' onChange={handleChange}/>
        <input type="text" placeholder='enter password' className='border border-black' name='password' onChange={handleChange}/>
        <input type="submit" className='border border-black'/>
    </form>  
)
}

export default LoginForm
