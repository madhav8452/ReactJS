import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormData from './form'
import EditData from './editData'


function MainRouter(){
  return (
    <Routes>
        <Route path='/' element={<FormData/>}></Route>
        <Route path='/editData/:id' element={<EditData/>}></Route>
    </Routes>
  )
}

export default MainRouter
