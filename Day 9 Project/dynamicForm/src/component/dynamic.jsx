import { useEffect, useState } from "react"
import "./dynamic.css"

function DynamicForm(prop){
    let [state, setState] = useState({
        name : '',
        email : '',
        education : [''],
        project : [''],
        image : ''
    })
    let [arr, setArr] = useState([])

    // State Data

    let handleChange = (e)=>{
        let {name, value} = e.target
        setState({...state, [name] : value}) 
    }

    // Education data

    let AddEducation = ()=>{
        setState({
            ...state,
            education : [...state.education, '']
        })
    }

    let handleEducation = (e,index)=>{
        let val = e.target.value
        let Education = [...state.education]
        Education[index] = val
        setState({...state, education : Education})
    }

    let EducationDelete = (index)=>{
        let Education = [...state.education]
        Education.splice(index, 1)
        setState({...state, education : Education})
    }

    // Project Data

    let AddProject = ()=>{
        setState({...state, project : [...state.project, '']})
    }

    let handleProject = (e,index)=>{
        let val = e.target.value
        let Project = [...state.project]
        Project[index] = val
        setState({...state, project : Project})
    }

    let ProjectDelete = (index)=>{
        let Project = [...state.project]
        Project.splice(index, 1)
        setState({...state, project : Project})
    }

    // Submit Data

    let submitData = ()=>{
        setArr([state])
    }

    useEffect(()=>{
        if(arr.length > 0){
            localStorage.setItem("Data", JSON.stringify(arr))
        }
    }, [arr])

    return (
        <form action="" className="w-[30%] h-[90%] rounded-xl shadow-lg shadow-[black] bg-white flex flex-col ps-10 pe-10 overflow-hidden" onSubmit={submitData}>
            <h1 className="text-4xl font-bold mt-10 mb-5 flex justify-center items-center relative">Form <span className="text-xs w-[100px] h-[30px] flex justify-center items-center rounded cursor-pointer absolute right-0 bg-[skyblue] shadow-sm shadow-black hover:shadow-none duration-200" onClick={prop.swi}>Application</span></h1>
            <label htmlFor="" className="font-bold mt-3">Name</label>
            <input 
                type="text" 
                placeholder="Enter Name" 
                className="border border-black w-[100%] min-h-[40px] rounded ps-5 text-sm"
                name="name" 
                onChange={handleChange}
            />

            <label htmlFor="" className="font-bold mt-3">Email</label>
            <input 
                type="text" 
                placeholder="Enter Email" 
                className="border border-black w-[100%] min-h-[40px] rounded ps-5 text-sm"
                name="email" 
                onChange={handleChange}
            />

            <label htmlFor="" className="font-bold mt-3 flex justify-between items-center">Education <span className="w-[100px] h-[30px] flex justify-center items-center bg-[skyblue] rounded cursor-pointer hover:border hover:border-black" onClick={AddEducation}>Add</span></label>
            <div className="w-[100%] max-h-[110px] overflow-auto">
                {state.education.map((el,index)=>{
                return <div className="w-[100%] flex justify-between items-center mt-3" key={index}>
                            <input 
                                type="text" 
                                placeholder="Enter Education" 
                                className="border border-black h-[40px] rounded ps-5 duration-500 text-sm" 
                                style={{width : state.education.length > 1 ? "75%" : "100%"}}
                                name={index} 
                                onChange={(e)=>handleEducation(e,index)}
                            />
                            {state.education.length > 1 ?
                            <input 
                                type="button"
                                className="border border-[brown] text-[brown] w-[22%] h-[40px] cursor-pointer rounded hover:bg-[brown] hover:text-white" 
                                value="Delete"
                                onClick={()=>EducationDelete(index)} 
                            />
                            : ''}
                        </div>
                })}
            </div>
            <label htmlFor="" className="font-bold mt-3 flex justify-between items-center">Projects <span className="w-[100px] h-[30px] flex justify-center items-center bg-[skyblue] rounded cursor-pointer hover:border hover:border-black" onClick={AddProject}>Add</span></label>
            <div className="w-[100%] max-h-[110px] overflow-auto">
                {state.project.map((el,index)=>{
                return <div className="w-[100%] flex justify-between items-center mt-3" key={index}>
                            <input 
                                type="text" 
                                placeholder="Enter Projects" 
                                className="border border-black h-[40px] rounded ps-5 duration-500 text-sm" 
                                style={{width : state.project.length > 1 ? "75%" : "100%"}}
                                name={index} 
                                onChange={(e)=>handleProject(e,index)}
                            />
                            {state.project.length > 1 ?
                            <input 
                                type="button"
                                className="border border-[brown] text-[brown] w-[22%] h-[40px] cursor-pointer rounded hover:bg-[brown] hover:text-white" 
                                value="Delete"
                                onClick={()=>ProjectDelete(index)} 
                            />
                            : ''}
                        </div>
                })}
            </div>
            <input type="submit" className="border border-black mt-5 w-[150px] h-[40px] rounded bg-black text-white hover:bg-white hover:text-black duration-200 cursor-pointer"/>
        </form>
    )
}

export default DynamicForm