import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { ToastContainer, toast, Bounce, Slide, Flip, Zoom } from 'react-toastify';

export default function Dashboard() {
    const [uid, setUid] = useState(null)
    const [Gusername, setGusername] = useState('')
    const [Gemail, setGemail] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [task, setTask] = useState('')
    const [priority, setPriority] = useState('')
    const [taskData, setTaskData] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const navigate = useNavigate(null)

    // Fetch User Data

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUid(user.uid)
                setGusername(user.providerData[0].displayName)
                setGemail(user.providerData[0].email)
            }
            else{
                setUid(null)
            }
        })
    },[])

    useEffect(()=>{
        if(uid){
            fetchUser()
            fetchTask()
        }
    },[uid])

    // Fetch User Assign to State

    const fetchUser = async () => {
        await getDoc(doc(db, 'users', uid))
        .then((res)=>{
            setUsername(res.data().username)
            setEmail(res.data().email)
        })
    }

    // Fetch Task from FireStore

    const fetchTask = async () =>{
        await getDocs(collection(db, 'task'))
        .then((res)=>{
            const newTask = res.docs.map((el)=>{
                return {id : el.id, ...el.data()}
            })
            setTaskData(newTask)
        })
        fetchTask()
    }

    // Add Task 

    const handleTask = async () => {
        if(editIndex == null){
            await addDoc(collection(db, 'task'), {userID : uid, task, priority})
            toast.success('Task Added', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
            fetchTask()
        }
        else{
            await updateDoc(doc(db, 'task', editIndex), {task, priority})
            toast.info('Task Updated', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }

        setTask('')
        setPriority('')
        setEditIndex(null)
    }

    // Delete Task

    const taskDelete = async (id) => {
        await deleteDoc(doc(db, 'task', id))
        .then((res)=>{
            setTaskData(taskData.filter((el)=>el.id != id))
            toast.error('Task Deleted', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        })
    }   

    // Update Task

    const taskUpdate = async (id) => {
        const singleTask = taskData.find((el) => el.id == id)
        
        setEditIndex(id)
        setTask(singleTask.task)
        setPriority(singleTask.priority)
    }

    return (
        <div className="p-10 border w-full h-screen bg-[#212121] flex justify-center items-center">
            <div className='w-full flex flex-col items-start border border-[gray] p-10 rounded-lg shadow shadow-[black] shadow-lg'>
                <p className="mb-10 font-bold text-4xl text-white flex justify-between w-full items-center [text-shadow:_0_0_5px_white]">Dashboard <span className='text-sm font-bold cursor-pointer border border-white px-5 py-1 rounded bg-white text-black' onClick={() => { navigate('/') }}>Home</span></p>
                <div className='border border-[gray] w-full h-[150px] rounded-lg p-10 flex flex-col justify-evenly'>
                    <p className='text-white font-bold'>{Gusername ? Gusername : username}</p>
                    <p className='text-white font-bold'>{Gemail ? Gemail : email}</p>
                </div>
                <div className='border border-[gray] w-full h-[350px] mt-5 p-5 grid grid-cols-2 gap-5'>
                    <div className='border border-[gray] h-full rounded p-5 flex flex-col items-start'>
                        <p className='text-white font-bold text-lg'>ADD TASK</p>
                        <input type="text" placeholder='Enter Task' className='border border-[gray] w-full h-[50px] ps-5 rounded mt-5 text-white' value={task} onChange={(e)=>{setTask(e.target.value)}}/>
                        <p className='mt-5 text-white'>Priority</p>
                        <select name="priority" id="" className='mt-5 text-[gray]' value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
                            <option hidden>Select Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        <button className='border border-white mt-5 w-[150px] h-[40px] rounded text-white cursor-pointer hover:bg-white hover:text-black' onClick={handleTask}>{ editIndex == null ? 'ADD TASK' : 'UPDATE TASK'}</button>
                    </div>

                    <div className='border border-[gray] h-full rounded overflow-auto p-3'>
                        {taskData && taskData.map((el)=>{
                            return <div className='border border-[gray] w-full h-[50px] rounded flex justify-between items-center mb-3' key={el.id}>
                                <p className='h-full flex justify-start items-center w-[200px] ps-5 text-white'>{el.task}</p>
                                <p className='h-full flex justify-center items-center w-[100px] text-white'>{el.priority}</p>
                                <div className='h-full flex justify-evenly items-center w-[100px]'>
                                    <button><i className="fa-solid fa-pen text-white cursor-pointer" onClick={()=>{taskUpdate(el.id)}}></i></button>
                                    <button><i className="fa-solid fa-trash text-white cursor-pointer" onClick={()=>{taskDelete(el.id)}}></i></button>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}
