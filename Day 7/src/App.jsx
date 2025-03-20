import { useState } from 'react'
import './App.css'
import Product from "./component/product"
import RenderProduct from './component/renderProducts';

function App() {
  let [swi, setSwi] = useState(true)

  let handleswi = ()=>{
    setSwi(!swi)
  }

  let [state, setState] = useState({
    title : "",
    price : "",
    description : "",
    image : ""
  })

  // Title Regex
  let titleRegex = /^[0-9A-Za-z" "]{6,16}$/
  let validTitle = titleRegex.test(state.title)
  
  //Price Regex
  let priceRegex = /^[0-9]{1,10}$/
  let validPrice = priceRegex.test(state.price)

  //Description Regex
  let desRegex = /^[0-9A-Za-z" "]{10,100}$/
  let validDes = desRegex.test(state.description)

  //Image Regex
  let imageRegex = /^[0-9A-Za-z" ":;/@-]{1,100}$/
  let validImage = imageRegex.test(state.image)

  let handleChange = (e)=>{    
    setState({...state,[e.target.name] : e.target.value})
  }

  let handleSignupSubmit = (e)=>{
    e.preventDefault()
    
    setArr([...arr, state])

    setState({
      title : "",
      price : "",
      description : "",
      image : ""
    })
  }

  return (
    <div className='body'>
      {swi == true ?
      <Product 
        handleswi={handleswi}
        state={state}
        handleChange={handleChange}
        validTitle={validTitle}
        validPrice={validPrice}
        validDes={validDes}
        validImage={validImage}
        handleSignupSubmit={handleSignupSubmit}
      >
      </Product>
      : <RenderProduct 
        handleswi={handleswi}
      >
      </RenderProduct>}
    </div>
  )
} 

export default App
