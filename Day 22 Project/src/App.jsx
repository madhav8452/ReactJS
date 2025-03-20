import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./component/Signup"
import Login from "./component/Login"
import Dashboard from "./component/Dashboard"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Signup}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/dashboard" Component={Dashboard}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
