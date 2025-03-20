import { useState } from 'react'
import './App.css'
import Signup from "./component/signup"
import Login from "./component/login"

function App() {
  let [swi,setSwi] = useState(true)
  
  let [state, setState] = useState({
    username : '',
    email : '',
    password : ''
  })

  let [arr,setArr] = useState([])

  //Username Regex
  let userRegex =  /^[0-9A-Za-z]{6,16}$/
  let uservalid = userRegex.test(state.username)

  //Email Regex
  let emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
  let emailvalid = emailRegex.test(state.email)

  //Password Regex
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/
  let passwordvalid = passwordRegex.test(state.password)

  console.log("user",uservalid, "email",emailvalid, "password",passwordvalid)
  let toggle = ()=>{
    setSwi(!swi)
  }

  let handleChange = (e)=>{
    setState({...state,[e.target.name] : e.target.value})
  }
  
  let handleSubmit = (e)=>{
    e.preventDefault()
    if(uservalid && emailvalid && passwordvalid){
      setArr([...arr,state])
      success()
    }
    else{
      error()
    }
    setState({
      username : '',
      email : '',
      password : ''
    })
  }

  return (
    <div className='body'>
      {swi == true 
      ?  <Signup toggle={toggle} handleChange={handleChange} handleSubmit={handleSubmit} state={state} userValid={uservalid} emailValid={emailvalid} passwordValid={passwordvalid}></Signup>
      : <Login toggle={toggle} arr={arr}></Login>
      }
    </div>
  )
}

export default App
