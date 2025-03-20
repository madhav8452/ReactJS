import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addApi, deleteData, fetchApiData, updateData } from '../action-creator/reducers'
import { ToastContainer, toast, Bounce, Slide, Flip, Zoom } from 'react-toastify';

function FormData() {

  let Data = useSelector((state) => state.fetchApi.data)
  let dispatch = useDispatch()

  // Add Data

  let [state, setState] = useState({
    task: ''
  })

  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ [name] : value })
  }

  let handleSubmit = () => {

    if(editIndex == null){
      dispatch(addApi(state))

      toast.success('Task added successfully', {
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
    else{
      dispatch(updateData({...state, id : editIndex}))

      toast.info('Task updated', {
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

      setEditIndex(null)
    }
    setState({
      task : ''
    })
  }

  // Fetch Data 

  useEffect(() => {
    dispatch(fetchApiData())
  }, [dispatch])

  // Delete Data

  let handleDelete = (id)=>{
    dispatch(deleteData(id))

    toast.error('Task deleted', {
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

    setEditIndex(null)

    setState({task : ''})
  }

  // Edit Data

  let [editIndex, setEditIndex] = useState(null)

  let handleEdit = (id)=>{
    let findData = Data.find((item)=>{
      return item.id == id
    })
    
    setState({task : findData.task})

    setEditIndex(id)
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-[#212121]'>
      <div className='w-[30%] h-[600px] bg-white rounded-lg flex flex-col items-center ps-10 pe-10'>
        <p className='text-2xl font-bold mt-10'>ToDo List <i className="fa-solid fa-file-pen"></i></p>
        <div className='border border-[green] mt-5 w-full h-[50px] rounded-full overflow-hidden flex justify-between items-center'>
          <input type="text" placeholder='Add your task' className='outline-none w-[80%] ps-5' autoComplete='off' name='task' value={state.task} onChange={handleChange} />
          <button className='border border-[green] bg-[green] text-white w-[50px] h-[50px] flex justify-center items-center rounded-full text-lg cursor-pointer' onClick={handleSubmit}>{editIndex == null ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-pen-to-square"></i> }</button>
        </div>
        <div className='w-full h-[400px] mt-5 flex flex-col items-center'>
          {Data.length == 0 ? <p className='font-bold text-sm'>Your task list is empty.</p> : <p className='font-bold text-sm text-[green]'>Todo item created successfully.</p> }
          <div className='w-full h-[85%] mt-5 flex flex-col gap-3 overflow-auto'>
            {Data.map((item) => {
              return <div className='w-full pt-3 pb-3 rounded-lg bg-[lightgray] flex justify-between items-center ps-5 pe-5' key={item.id}>
                <p className='w-[80%] text-sm'>{item.task}</p>
                <div className='w-[15%] flex justify-between items-center'>
                  <button onClick={()=>{handleEdit(item.id)}}><i className="fa-solid fa-pen cursor-pointer"></i></button>
                  <button onClick={()=>{handleDelete(item.id)}}><i className="fa-solid fa-trash cursor-pointer"></i></button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default FormData
