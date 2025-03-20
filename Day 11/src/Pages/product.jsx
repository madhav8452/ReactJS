import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './product.css'
import axios from "axios"

function Product(){
    let [state, setState] = useState([])

    let navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3000/product')
        .then((res)=>{
            console.log(res.data)
            setState(res.data)
        })
    },[])
    
    return (
        <div className="w-[100%] h-[86vh] p-10 overflow-auto grid gap-5">
            {state.map((el)=>(
                <div className="border border-[gray] w-[100%] h-[250px] rounded-lg p-5 bg-white flex justify-between" key={el.id}>
                    <div className="w-[13%] h-[100%] flex justify-center items-center" onClick={()=>{navigate(`/singleProduct/${el.id}`)}}><img src={el.image} alt={el.title}/></div>
                    <div className="w-[85%] h-[100%] pt-5 pe-20 relative">
                        <p className="font-bold">{el.title}</p>
                        <p className="font-bold text-[green] mt-3">₹{el.price}</p>
                        <p className="font-bold text-[gray] text-sm mt-3">{el.description}</p>
                        <div className="w-[210px] h-[35px] absolute bottom-0 flex justify-between">
                            <Link to={`/product/${el.id}`}><button className="border border-black w-[100px] h-[100%] rounded font-bold cursor-pointer bg-black text-white text-sm hover:bg-[white] hover:text-black">Edit</button></Link>
                            <button className="border border-[brown] w-[100px] h-[100%] rounded font-bold cursor-pointer bg-[brown] text-white text-sm hover:bg-[white] hover:text-[brown]" onClick={()=>{handleDelete(el.id)}}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>   
    )
}

export default Product