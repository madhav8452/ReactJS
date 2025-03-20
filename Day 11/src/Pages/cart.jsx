import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Cart(){
    let [state, setState] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/cart?userName=${localStorage.getItem("userName")}`)
        .then((res)=>{
            setState(res.data)
        })
    },[])


    console.log(state)
  return (
    <>
        {state.map((el)=>{
            return <div className='border border-black w-full h-[250px]' key={el.id}>
                <div className='border border-black w-[20%] h-[50%]'>
                    <div>{el.product.image}</div>
                </div>
                <div>Title : {el.product.title}</div>
            </div>
        })}
    </>
  )
}

export default Cart
