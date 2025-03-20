import axios from "axios"
import { useEffect, useState } from "react"
import "./renderProducts.css"

function RenderProduct(prop){
    let [state,setState] = useState([])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>{
            setState(res.data)
        })
    })

    return (
        <div className="w-[100%] h-[100%]">
            <h1 className="w-[100%] h-[100px] flex justify-center items-center text-xl font-bold bg-[gray] relative">Products <p className="absolute right-[30px] border border-black w-[150px] h-[40px] flex justify-center items-center bg-black text-white text-xs rounded cursor-pointer hover:bg-transparent hover:text-black" onClick={prop.handleswi}>ADD PRODUCTS</p></h1>

            <div className="w-[100%] h-[86vh] flex flex-wrap justify-center p-[18px] gap-[18px] overflow-auto">
                {state.map((el)=>{
                    return <div key={el.id} className="w-[19%] h-[450px] rounded-lg overflow-hidden bg-white cursor-pointer hover:bg-black hover:text-white">
                        <div className="w-[100%] h-[70%]">
                            <img src={el.image} alt="" className="w-[100%] h-[100%]"/>
                        </div>
                        <div className="w-[100%] h-[30%] p-3">
                            <p className="text-xs font-bold">{el.title}</p>
                            <p className="text-[green] text-xs font-bold mt-3">Price :{el.price}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default RenderProduct