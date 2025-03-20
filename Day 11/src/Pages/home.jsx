import { useState } from "react"

function Home(){
    let [state, setState] = useState(localStorage.getItem("userName"))

    let handleLogout = ()=>{
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("userName")
        window.location.reload()
    }

    return (
        <div className="w-[100%] h-[86vh] flex flex-col justify-center items-center">
           <h1 className="text-4xl font-bold">Home</h1>
           <div className="w-[200px] h-[100px] flex justify-center items-center">
                {state ? <p className="border border-black w-[200px] h-[40px] flex justify-center items-center font-bold rounded bg-black text-white">Hi,{state}</p> : <p className="border border-black w-[200px] h-[40px] flex justify-center items-center font-bold rounded bg-black text-white">Login</p> }
           </div>
           {state ? <input type="button" value='Logout' onClick={handleLogout} className="border border-black w-[100px] h-[40px] rounded cursor-pointer"/>: ''}
        </div>
    )
}

export default Home