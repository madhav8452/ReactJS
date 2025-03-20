import React, { useEffect, useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { db } from './firebase';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function FormData(){
    let [state, setState] = useState({
        title : '',
        description : ''
    })

    let notify = ()=>{
        toast.success('Task Added', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    // ADD DATA

    let Usercollection = collection(db, 'Users')

    let handleChange = (e)=>{
        let {name, value} = e.target
        setState({...state, [name] : value})
    }

    let handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            await addDoc(Usercollection, state)
            setState({
                title : '',
                description : ''
            })   
            notify()
            window.location.reload()
        }
        catch(error){
            console.log("Data not post", error)
        }
    }

    // GET DATA

    let [data, setData] = useState([])

    useEffect(()=>{
        let userData = async()=>{
            try{
                let a = await getDocs(Usercollection)
                let b = a.docs.map((el)=>{
                    return {id : el.id, ...el.data()}
                })
                setData(b)
            }
            catch(error){
                console.log("Error in Fetch data:", error)
            }
        }

        userData()
    },[])

    // DELETE DATA

    let handleDelete = async(id)=>{
        try{
            let docRef = doc(Usercollection, id)
            await deleteDoc(docRef)
            window.location.reload()
        }
        catch(error){
            console.log("Delete Error", error)
        }
    }

  return (
    <>
    <div className='border border-black w-full h-screen bg-black flex'>
        <form action="" className='p-20 flex flex-col w-[50%] border border-black h-full' onSubmit={handleSubmit}>
            <h1 className='text-white text-xl font-bold'>ADD TASK</h1>
            <label htmlFor="" className='text-white mt-5 font-bold mb-2'>Title</label>
            <input type="text" placeholder='Enter Title' className='border border-white text-white w-[80%] h-[40px] rounded ps-5' autoComplete='off' value={state.title} name='title' onChange={handleChange}/>
            <label htmlFor="" className='text-white mt-5 font-bold mb-2'>Description</label>
            <input type="text" placeholder='Enter Description' className='border border-white text-white w-[80%] h-[40px] rounded ps-5' autoComplete='off' value={state.description} name='description' onChange={handleChange}/>
            <input type="submit" className='border border-white text-white font-bold mt-10 w-[100px] h-[40px] rounded cursor-pointer hover:bg-white hover:text-black'/>
        </form>
        <div className='border border-black w-[50%] h-full bg-[gray] rounded-lg flex flex-col gap-5 p-10 overflow-auto'>
            <p className='font-bold'>TASK LIST</p>
            {data.map((el)=>(
                <div className='border-2 border-black p-5 rounded' key={el.id}>
                    <table>
                        <tbody>
                            <tr>
                                <td className='p-2 min-w-[110px] font-bold flex justify-start'>Title</td>
                                <td className='p-2'>{el.title}</td>   
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='p-2 min-w-[110px] font-bold flex justify-start'>Description</td>
                                <td className='p-2'>{el.description}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='mt-5'>
                        <Link to={`/editData/${el.id}`}><button className='border border-black w-[80px] h-[30px] bg-black font-bold text-white text-xs hover:bg-transparent hover:text-black rounded cursor-pointer me-3'>Edit</button></Link>
                        <button className='w-[80px] h-[30px] bg-[brown] text-white text-xs font-bold hover:bg-transparent hover:border hover:border-[brown] hover:text-[brown] rounded cursor-pointer me-3' onClick={()=>{handleDelete(el.id)}}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default FormData

