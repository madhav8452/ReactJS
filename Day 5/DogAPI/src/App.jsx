import { useState,useEffect } from 'react'
import './App.css'

function App() {
  let [image, setImage] =  useState(0)

  useEffect(()=>{
    hendleImage()
  },[])

  let hendleImage = ()=>{
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
      setImage(res.message)
    })
  }

  return (
    <div className='body'>
        <div className='image'>
          <img src={image} alt=""/>
        </div>
        <button onClick={hendleImage}>Next Image</button>
    </div>
  )
}

export default App
