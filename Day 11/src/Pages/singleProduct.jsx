import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct(){
  let [state, setState] = useState([])

  let {id} = useParams()
  
  useEffect(()=>{
    axios.get(`http://localhost:3000/product/${id}`)
    .then((res)=>{
      setState(res.data)
    })
  },[])

  let handleAdd = ()=>{
    let obj = {
      product : state,
      userName : localStorage.getItem("userName"),
      quantity : 1
    }
    
    axios.get(`http://localhost:3000/cart?userName=${localStorage.getItem("userName")}`)
    .then((res)=>{
      console.log(res.data)
      let a = res.data.find((el)=>{
        return el.product.id == id
      })
      
      if(a == undefined){
        axios.post(`http://localhost:3000/cart`,obj)
        .then((res)=>{
          console.log(res.data)
        })
      }
      else{
        alert("item already exist in cart")
      }
    })

  }
  
  return (
    <div>
        <div className='border border-black w-[100%] h-[300px]'>
          <div>id : {state.id}</div>
          <div>Title : {state.title}</div>
          <div>Price : {state.price}</div>
          <div>Image : {state.image}</div>
          <div>Description : {state.description}</div>
          <button className='border border-black mt-5 w-[100px] h-[40px]' onClick={handleAdd}>Add to cart</button>
        </div>
    </div>
  )
}

export default SingleProduct
