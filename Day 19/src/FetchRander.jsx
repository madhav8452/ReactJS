import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, fetchApi, updateProduct } from './action-creator/reducer'

function FetchRander() {
    let Data = useSelector((state)=>state.configurestore)
    let dispatch = useDispatch()

    useEffect(()=>{
        setTimeout(() => {
            dispatch(fetchApi())
        }, 2000);
    },[])

    let handleDelete = (id)=>{
        dispatch(deleteProduct(id))
    }

    // Edit Data

    let [state, setState] = useState({
        id : '',
        url : '',
        title : '',
        price : ''
    })

    let editBox = useRef(null)

    let closeEditBox = ()=>{
        editBox.current.style.display = 'none'
    }

    let handleChange = (e)=>{
        let {name, value} = e.target

        setState({...state, [name] : value})
    }

    let handleEdit = (id, image, title, price)=>{
        editBox.current.style.display = 'flex'
        setState({
            id,
            image,
            title,
            price
        })
    }

    let handleSubmit = ()=>{
        dispatch(updateProduct(state))
        editBox.current.style.display = 'none'
    }

    if(Data.loading){
        return <p className='w-full h-screen flex justify-center items-center bg-black text-white font-bold text-2xl'>Loading...</p>
    }

    return (
        <div className='p-10 grid grid-cols-2 gap-5 bg-[gray]'>
        {Data.data && Data.data.map((e)=>{
            return <div className='w-full h-[200px] rounded bg-white p-5 flex' key={e.id}>
                <div className='w-[30%] h-full flex justify-center items-center'>
                    <img src={e.image} alt=""  className='h-full'/>
                </div>
                <div className='w-[70%] h-full'>
                    <p className='font-bold'>{e.title}</p>
                    <p className='font-bold text-[green] mt-5'>RS. {e.price}</p>
                    <button className='border w-[100px] h-[40px] rounded mt-10 me-3 cursor-pointer bg-black text-white' onClick={()=>{handleEdit(e.id, e.image, e.title, e.price)}}>Edit</button>
                    <button className='border w-[100px] h-[40px] rounded mt-10 me-3 cursor-pointer bg-[brown] text-white' onClick={()=>{handleDelete(e.id)}}>Delete</button>
                </div>
            </div>
        })
        }
        <div className='w-full h-screen flex justify-center items-center fixed top-0 left-0 backdrop-blur-[30px] hidden' ref={editBox}>
            <div className='border border-[gray] w-[600px] h-[300px] rounded bg-white flex flex-col justify-center items-center relative'>
                <i className="fa-solid fa-square-xmark absolute top-[-30px] right-[-30px] text-[brown] text-2xl cursor-pointer" onClick={closeEditBox}></i>
                <p className='text-lg font-bold'>Edit Data</p>
                <input type="text" placeholder='Enter Title' className='border border-[gray] w-[80%] h-[40px] rounded ps-5 mt-5' name='title' value={state.title} onChange={handleChange}/>
                <input type="text" placeholder='Enter Price' className='border border-[gray] w-[80%] h-[40px] rounded ps-5 mt-5' name='price' value={state.price} onChange={handleChange}/>
                <button className='border w-[100px] h-[40px] rounded bg-black text-white cursor-pointer mt-5' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        </div>
    )
}

export default FetchRander
