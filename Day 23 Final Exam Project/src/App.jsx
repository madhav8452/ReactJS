import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./component/home"
import ReservationForm from "./component/ReservationForm"
import ReservationList from "./component/ReservationList"
import Signup from "./component/Signup"
import Login from "./component/Login"
import PrivateRoute from "./component/privateRoute"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/reservationForm" element={<PrivateRoute><ReservationForm/></PrivateRoute>}></Route>
        <Route path="/reservationList" Component={ReservationList}></Route>
        <Route path="/signup" Component={Signup}></Route>
        <Route path="/login" Component={Login}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
