import { useState } from "react"
import "./component.css"

function Form(){
    let [state, setState] = useState(true)
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [loginEmail, setloginEmail] = useState("")
    let [loginPassword, setloginPassword] = useState("")
    let [arr,setArray] = useState([])

    let hendleSubmit = ()=>{
        let  obj = {
            username,
            email,
            password
        }
        setArray([...arr,obj])
    }

    let hendleLogin = ()=>{
        arr.filter((el)=>{
            if(el.email != loginEmail){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your email is wrong!",
                });
            }
            else{
                if(el.password != loginPassword){
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Your password is wrong!",
                    });
                }
                else{
                    Swal.fire({
                        title: "Good job!",
                        text: "Login Successful!",
                        icon: "success"
                    });
                }
            }
        })
    }

    let toggle = ()=>{
        setState(!state)
    }

    return (
        <div>
            {state == true ?
            <div className="login">
                <h1>Log In</h1>
                <label htmlFor="">Email</label>
                <input type="text" value={loginEmail} placeholder="Enter Email" onChange={(el)=>{setloginEmail(el.target.value)}}/>
                <label htmlFor="">Password</label>
                <input type="text" value={loginPassword} placeholder="Enter Password" onChange={(el)=>{setloginPassword(el.target.value)}}/>
                <input type="Submit" id="submit" onClick={hendleLogin}/>
                <p onClick={toggle}>Already have a Account? Log In</p>
            </div>
            : <div className="signup">
                <h1>Sign Up</h1>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter Username" onChange={(el)=>{setUsername(el.target.value)}}/>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Email" onChange={(el)=>{setEmail(el.target.value)}}/>
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter Password" onChange={(el)=>{setPassword(el.target.value)}}/>
                <input type="Submit" id="submit"onClick={hendleSubmit}/>
                <p onClick={toggle}>New user? Create Account</p>
            </div>
            }
        </div>
    )
}

export default Form