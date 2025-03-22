import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./component/home"
import ReservationForm from "./component/ReservationForm"
import ReservationList from "./component/ReservationList"
import Signup from "./component/signup"
import Login from "./component/Login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/reservationForm" Component={ReservationForm}></Route>
        <Route path="/reservationList" Component={ReservationList}></Route>
        <Route path="/signup" Component={Signup}></Route>
        <Route path="/login" Component={Login}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
