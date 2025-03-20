import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    let [state, setState] = useState(localStorage.getItem("isLoggedIn") || false)

    // useEffect(()=>{
    //     axios.get(`http://localhost:3000/isLoggedIn`)
    //     .then((res)=>{
    //         if(res.data.length > 0){
    //             setState(1)
    //         }
    //     })    
    // }, [])

    return (
        <>
            {state == 'true' ? children : <Navigate to={'/login'}></Navigate> }
        </>
    )
}

export default PrivateRoute
