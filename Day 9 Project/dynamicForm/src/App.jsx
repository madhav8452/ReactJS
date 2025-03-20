import { useState } from 'react'
import './App.css'
import DynamicForm from "./component/dynamic"
import ProfileData from './component/profileDetail'

function App() {
  let [swi, setSwi] = useState(true)
  
  let handleSwi = ()=>{
    setSwi(!swi)
  }

  return (
    <>
      {swi ?
      <DynamicForm swi={handleSwi}></DynamicForm>
      : <ProfileData swi={handleSwi}></ProfileData> }
    </>
  )
}

export default App
