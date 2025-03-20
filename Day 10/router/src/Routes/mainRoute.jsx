import { Route, Routes } from "react-router-dom"
import Home from "../Pages/home"
import About from "../Pages/about"
import Form from "../Pages/form"
import Product from "../Pages/product"
import ErrorPage from "../Pages/pagenotfound"
import EditProduct from "../Pages/editProduct"
import MaterialUI from "../Pages/MaterialUI"

function MainRouter(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/form" element={<Form/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path='/product/:id' element={<EditProduct/>}></Route>
            <Route path="/materialUI" element={<MaterialUI/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
    )
}

export default MainRouter