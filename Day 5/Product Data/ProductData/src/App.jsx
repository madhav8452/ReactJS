import { useState,useEffect } from 'react'
import './App.css'

function App(){
  let [state,setState] = useState([])

  useEffect(()=>{
    fetch(`https://dummyjson.com/products`)
    .then((res)=>res.json())
    .then((res)=>{
      setState(res.products)
    })
  },[])

  console.log(state)

  return <div className='body'>
    <div>
      <h1>Products</h1>
    </div>
    <div className='product'>
      {state.map((el)=>{
        return <div className='card'>
          <div className='image'>
            <img src={el.thumbnail} alt="" />  
            <p className='rate'><i class="fa-solid fa-star"></i>{el.rating}</p>
          </div> 
          <div className='details'>
            <p className='head'>{el.title}</p>
            <p className='brand'>{el.brand}</p>
            <p className='category'>{el.category}</p>
            <p className='price'>₹{el.price}</p>
          </div>
        </div>
      })}
    </div>
  </div>
}
export default App