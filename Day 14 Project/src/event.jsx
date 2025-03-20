import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Event_Product(prop){
    // GET DATA

    let [data, setData] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/Event`)
        .then((res)=>{
            if(prop.filteredData == 'Events'){
                setData(res.data.filter((e)=> e.category == 'Events'))
            }
            else if(prop.filteredData == 'Movies'){
                setData(res.data.filter((e)=> e.category == 'Movies'))
            }
            else if(prop.filteredData == 'Dining'){
                setData(res.data.filter((e)=> e.category == 'Dining'))
            }
            else{
                setData(res.data)
            }
        })
    },[prop.filteredData])

    // SEARCH DATA

    useEffect(()=>{
        setData(prop.data)
    },[prop.data])

    // DELETE DATA

    let handleDelete = (id)=>{
        axios.delete(`http://localhost:3000/Event/${id}`)
        .then((res)=>{
            setData((data)=>{
                return data.filter((item)=>{
                    return item.id != id
                })
            })
        })
    }
    
  return (
    <div className='w-full h-screen overflow-auto grid grid-cols-4 p-10 gap-10 bg-no-repeat bg-center bg-cover' style={{backgroundImage : 'URL(https://www.district.in/assets/images/background-placeholder.png)'}}>
        {data.map((el)=>(
            <div className='w-full h-[600px] bg-white rounded-xl overflow-hidden' key={el.id}>
                <div className='w-ful h-[410px]'>
                    <img src={el.image} alt="" className='w-full h-full'/>
                </div>
                <div className='w-full h-auto p-5'>
                    <p className='font-bold mb-3'>{el.title}</p>
                    <p className='font-bold mb-5'>₹ {el.price}</p>
                    <div className='w-full h-[40px] flex justify-between items-center'>
                        <button className='border-2 border-black w-[45%] h-full rounded cursor-pointer bg-black text-white hover:bg-white hover:text-black'><Link to={`/edit/${el.id}`}>Edit</Link></button>
                        <button className='border-2 border-[brown] w-[45%] h-full rounded cursor-pointer bg-[brown] text-white hover:bg-white hover:text-[brown]' onClick={()=>{handleDelete(el.id)}}>Delete</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Event_Product
