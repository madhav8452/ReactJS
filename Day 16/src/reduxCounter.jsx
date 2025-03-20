import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/counterSlice'

export default function ReduxCounter() {
  let count = useSelector((state)=>state.count)
  let dispatch = useDispatch()
  
  console.log(count)

  return (
    <div className='border border-black w-full h-screen flex flex-col justify-center items-center'>
        <p className='font-bold text-lg'>Redux Counter</p>
        <div className='w-[200px] flex justify-between mt-10'>
            <button className='border border-black w-[40px] h-[40px] text-lg cursor-pointer rounded bg-black text-white' onClick={()=>{dispatch(decrement())}}>-</button>
            <h2 className='border border-black w-[100px] h-[40px] flex justify-center items-center rounded'>{count}</h2>
            <button className='border border-black w-[40px] h-[40px] text-lg cursor-pointer rounded bg-black text-white' onClick={()=>{dispatch(increment())}}>+</button>
        </div>
    </div>
  )
}
