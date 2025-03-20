import { Route, Routes } from "react-router-dom"
import Home from "../Pages/home"
import About from "../Pages/about"
import Form from "../Pages/form"
import Product from "../Pages/product"
import ErrorPage from "../Pages/pagenotfound"
import EditProduct from "../Pages/editProduct"
import MaterialUI from "../Pages/MaterialUI"
import SingleProduct from "../Pages/singleProduct"
import Signup from "../Pages/signup"
import LoginForm from "../Pages/login"
import PrivateRoute from "../component/privateRoute"
import Cart from "../Pages/cart"

function MainRouter(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<LoginForm/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/form" element={<Form/>}></Route>
            <Route path="/product" element={<PrivateRoute><Product/></PrivateRoute>}></Route>
            <Route path='/product/:id' element={<EditProduct/>}></Route>
            <Route path="/singleProduct/:id" element={<PrivateRoute><SingleProduct/></PrivateRoute>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/materialUI" element={<MaterialUI/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
    )
}

export default MainRouter