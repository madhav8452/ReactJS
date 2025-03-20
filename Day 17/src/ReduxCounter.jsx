import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from './action-creator/reducers'

export default function ReduxCounter() {
  const count = useSelector((state)=>state.configureStore.count)
  const dispatch = useDispatch()

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='font-bold text-lg'>Redux Counter</h1>
        <div className='mt-10 flex'>
            <button className='w-[40px] h-[40px] bg-black text-white text-xl rounded cursor-pointer' onClick={()=>{dispatch(decrease())}}>-</button>
            <div className='border border-black w-[100px] h-[40px] rounded ms-5 me-5 flex justify-center items-center'>{count}</div>
            <button className='w-[40px] h-[40px] bg-black text-white text-xl rounded cursor-pointer' onClick={()=>{dispatch(increase())}}>+</button>
        </div>
    </div>
  )
}
