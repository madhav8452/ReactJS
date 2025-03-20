import { useState } from "react"
import "./product.css"

function Product(){
    let [state, setState] = useState(true)
    let [title, setTitle] = useState("")
    let [price, setPrice] = useState("")
    let [des, setDes] = useState("")
    let [image, setImage] = useState("")
    let [arr, setArr] = useState([]) 

    let hendleSubmit = ()=>{
        let obj = {
            title,
            price,
            des,
            image
        }
        setArr([...arr,obj])
        setTitle("")
        setPrice("")
        setDes("")
        setImage("")
    }
    
    console.log(arr)

    let toggle = ()=>{
        setState(!state)
    }

    return (
        <div className="border">
            {state == true ?
            <div className="addProduct">
                <h1>Add Products</h1>
                <label htmlFor="">Title</label>
                <input type="text" value={title} placeholder="Enter Title" onChange={(el)=>{setTitle(el.target.value)}}/>
                <label htmlFor="">Price</label>
                <input type="text" value={price} placeholder="Enter Price" onChange={(el)=>{setPrice(el.target.value)}}/>
                <label htmlFor="">Description</label>
                <input type="text" value={des} placeholder="Enter Description" onChange={(el)=>{setDes(el.target.value)}}/>
                <label htmlFor="">Image</label>
                <input type="text" value={image} placeholder="Enter Image src" onChange={(el)=>{setImage(el.target.value)}}/>
                <input type="submit" id="submitbtn" onClick={hendleSubmit}/>
                <p className="anchor" onClick={toggle}>Goto Product Page</p>
            </div>
            : <div className="productdata">
                <div className="head">
                    <h1>Products</h1>
                    <button onClick={toggle}>Goto AddProducts</button>
                </div>
                <div className="AllProducts">
                    {    
                    arr.map((el)=>{
                        return (
                            <div className="card">
                                <div className="image">
                                    <img src={el.image}></img>
                                </div>
                                <div className="details">
                                    <p className="title">{el.title}</p>
                                    <p className="des">{el.des}</p>
                                    <p className="price">₹{el.price}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            }
        </div>
    )
}

export default Product