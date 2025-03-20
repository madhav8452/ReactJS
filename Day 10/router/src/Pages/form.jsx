import { useEffect, useState } from "react"
import { v4 } from 'uuid'

function Form(){
    let [state, setState] = useState({
        id : v4(),
        title : '',
        price : '',
        description : '',
        image : ''
    })
    let [arr, setArr] = useState(JSON.parse(localStorage.getItem("data")) || [])

    let handleChange = (e)=>{
        let {name, value} = e.target

        setState({...state, [name] : value})
    }

    let handleSubmit = (e)=>{
        e.preventDefault()

        setArr([...arr, state])
        setState({
            id : v4(),
            title : '',
            price : '',
            description : '',
            image : ''
        })
    }
    
    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(arr))
    }, [arr])

    return (
        <div className="w-[100%] flex justify-center items-center pt-5 pb-5">
            <form action="" className="w-[30%] h-[650px] text-white bg-[gray] rounded-xl shadow-inner shadow-[black] flex flex-col ps-10 pe-10 overflow-hidden" onSubmit={handleSubmit}>
                <h1 className="w-[100%] h-[150px] flex justify-center items-center text-4xl font-bold">Form</h1>
                <label htmlFor="" className="mt-5 mb-1 font-bold">Title</label>
                <input 
                    type="text" 
                    placeholder="Enter Title"
                    className="border border-black w-[100%] h-[40px] ps-5 text-xs text-black placeholder:text-white rounded bg-transparent"
                    name="title"
                    value={state.title}
                    onChange={handleChange}
                />
                <label htmlFor="" className="mt-5 mb-1 font-bold">Price</label>
                <input 
                    type="text" 
                    placeholder="Enter Price"
                    className="border border-black w-[100%] h-[40px] ps-5 text-xs text-black placeholder:text-white rounded bg-transparent"
                    name="price"
                    value={state.price}
                    onChange={handleChange}
                />
                <label htmlFor="" className="mt-5 mb-1 font-bold">Description</label>
                <input 
                    type="text" 
                    placeholder="Enter Description"
                    className="border border-black w-[100%] h-[40px] ps-5 text-xs text-black placeholder:text-white rounded bg-transparent"
                    name="description"
                    value={state.description}
                    onChange={handleChange}
                />
                <label htmlFor="" className="mt-5 mb-1 font-bold">Image</label>
                <input 
                    type="text" 
                    placeholder="Enter Image Source"
                    className="border border-black w-[100%] h-[40px] ps-5 text-xs text-black placeholder:text-white rounded bg-transparent"
                    name="image"
                    value={state.image}
                    onChange={handleChange}
                />
                <input 
                    type="submit"
                    className="border border-black w-[100px] h-[40px] rounded mt-10 cursor-pointer hover:bg-black hover:text-white duration-200"
                />
            </form>
        </div>
    )
}

export default Form