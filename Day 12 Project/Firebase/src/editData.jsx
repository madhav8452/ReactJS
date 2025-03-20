import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'

function EditData(){
    let {id} = useParams()
    let navigate = useNavigate()

    let [state, setState] = useState({
        title : '',
        description : ''
    })

    let Usercollection = collection(db, 'Users')

    useEffect(()=>{
        let formData = async()=>{
            let a = await getDocs(Usercollection)
            let b = a.docs.map((el)=>{
                return {id : el.id, ...el.data()}
            })
            b = b.filter((el)=>{
                if(el.id == id){
                    return el
                }
            })
            setState(b[0])
        }

        formData()
    },[])

    let handleChange = (e)=>{
        let {name, value} = e.target
        setState({...state, [name] : value})
    }

    let handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            let docRef = doc(Usercollection, id)
            await updateDoc(docRef, state)
            navigate('/')
        }
        catch(error){
            console.log("Error in Updata data: ", error)
        }
    }

  return (
    <div className='p-20 bg-black w-full h-screen'>
      <p className='text-white text-xl font-bold'>Edit Task</p>
      <form action="" className='flex flex-col w-[50%] h-full' onSubmit={handleSubmit}>
            <label htmlFor="" className='text-white mt-5 font-bold mb-2'>Title</label>
            <input type="text" placeholder='Enter Title' className='border border-white w-[80%] h-[40px] text-white rounded ps-5' autoComplete='off' value={state.title} name='title' onChange={handleChange}/>
            <label htmlFor="" className='text-white mt-5 font-bold mb-2'>Description</label>
            <input type="text" placeholder='Enter Description' className='border border-white w-[80%] h-[40px] text-white rounded ps-5' autoComplete='off' value={state.description} name='description' onChange={handleChange}/>
            <input type="submit" className='border border-white text-white font-bold hover:bg-white hover:text-black mt-10 w-[100px] h-[40px] rounded cursor-pointer'/>
        </form>
    </div>
  )
}

export default EditData
