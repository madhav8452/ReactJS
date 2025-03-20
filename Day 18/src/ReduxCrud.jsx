import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updataData } from './Action-creator/reducer'

function ReduxCrud() {
  const Data = useSelector((state) => state.configureStore.student)
  console.log(Data)
  const dispatch = useDispatch()
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [editIndex, setEditIndex] = useState(null)

  let handleSubmit = () => {
    if(editIndex == null){
      let obj = { id: Date.now(), email, password }
      dispatch(addData(obj))
    }
    else{
      dispatch(updataData({editIndex, email, password}))
    }
    setEmail('')
    setPassword('')
    setEditIndex(null)
  }

  let handleDelete = (id)=>{
    dispatch(deleteData(id))
  } 

  let handleEdit = (id)=>{
    let singleData = Data.find((e)=>e.id == id)
    setEmail(singleData.email)
    setPassword(singleData.password)
    setEditIndex(id)
  }

  return (
    <>
      <div className='border border-black w-full p-10 flex flex-col bg-black text-white'>
        <p className='font-bold'>{editIndex == null ? 'ADD DATA' : 'EDIT DATA'}</p>
        <input type="text" placeholder='Enter Email' className='mt-3 border border-white w-[40%] h-[40px] rounded ps-5' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <input type="text" placeholder='Enter Password' className='mt-3 border border-white w-[40%] h-[40px] rounded ps-5' value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <button className='border border-white w-[100px] h-[40px] rounded cursor-pointer mt-5' onClick={handleSubmit}>{editIndex == null ? 'SUBMIT' : 'UPDATE'}</button>
      </div>
      <div className='border w-full h-[63vh] bg-[gray] p-10'>
        <div className='border border-black w-full h-[50px] flex'>
          <div className='border w-[10%] h-full flex justify-center items-center font-bold'>NO.</div>
          <div className='border w-[35%] h-full flex justify-center items-center font-bold'>EMAIL</div>
          <div className='border w-[35%] h-full flex justify-center items-center font-bold'>PASSWORD</div>
          <div className='border w-[20%] h-full flex justify-center items-center font-bold'>Actions</div>
        </div>
        {Data && Data.map((e, i)=>{
        return  <div className='border border-black w-full h-[50px] flex' key={e.id}>
                  <div className='border w-[10%] h-full flex justify-center items-center font-bold'>{i + 1}</div>
                  <div className='border w-[35%] h-full flex justify-center items-center font-bold'>{e.email}</div>
                  <div className='border w-[35%] h-full flex justify-center items-center font-bold'>{e.password}</div>
                  <div className='border w-[20%] h-full flex justify-center items-center font-bold grid grid-cols-2 gap-10 ps-5 pe-5'>
                    <button className='w-[100%] h-[30px] rounded cursor-pointer bg-black text-white' onClick={()=>{handleEdit(e.id)}}>Edit</button>
                    <button className='w-[100%] h-[30px] rounded cursor-pointer bg-[brown] text-white' onClick={()=>{handleDelete(e.id)}}>Delete</button>
                  </div>
                </div>
        })}
      </div>
    </>
  )
}

export default ReduxCrud
