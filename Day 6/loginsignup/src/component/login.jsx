import { useState } from "react"
import "./login.css"
import "./notification.css"

function Login(prop){
    console.log(prop)
    let [login, setLogin] = useState({
        email : '',
        password : ''
    })
    
    //Email Regex
    let emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
    let loginemail = emailRegex.test(login.email)

    //Password Regex
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/
    let loginpassword = passwordRegex.test(login.password)

    let handleData = (e)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    }
    
    let handleLogin = (e)=>{
        e.preventDefault()
        if(loginemail && loginpassword){
            let foundUser = prop.arr.find((el)=>{
                return el.email == login.email
            })
          
            if (!foundUser) {
                error()
            } else if (foundUser.password != login.password) {
                info()
            } else {
              success()
            }    
        }
    }

    return (
        <div>
            <form action="" id="loginForm" onSubmit={handleLogin}>
                <h1>Login</h1>
                <label htmlFor="">Email</label>
                <input 
                    type="text" 
                    placeholder="Enter Email" 
                    name="email" 
                    onChange={handleData}
                    style={{outline : loginemail ? "2px solid green" : "2px solid red"}}
                />
                {loginemail ? <p className="errormsg">Email is Valid</p> : <p className="errormsg">Email is Invalid</p> }
                <label htmlFor="">Password</label>
                <input 
                    type="text" 
                    placeholder="Enter Password" 
                    name="password" 
                    onChange={handleData}
                    style={{outline : loginpassword ? "2px solid green" : "2px solid red"}}
                />
                {loginpassword ? <p className="errormsg">Password is Valid</p> : <p className="errormsg">Password is Invalid</p> }
                <div>
                    <input type="submit" id="loginSubmit"/>
                    <p onClick={prop.toggle}>New User? Create Account</p>
                </div>
            </form>

            <div id="notification">
                <div id="success">
                    <i className="fa-solid fa-xmark" id="Sclose"></i>
                    <p className="head">Success</p>
                    <p className="msg">Login Successful</p>
                </div>
                <div id="error">
                    <i className="fa-solid fa-xmark" id="Eclose"></i>
                    <p className="head">Error</p>
                    <p className="msg">Incorrect Email ID</p>
                </div>
                <div id="info">
                    <i className="fa-solid fa-xmark" id="Iclose"></i>
                    <p className="head">Error</p>
                    <p className="msg">Incorrect Password</p>
                </div>
            </div>
        </div>
    )
}

export default Login