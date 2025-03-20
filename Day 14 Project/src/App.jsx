import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import FormData from "./form"
import Navbarcode from "./navbar"
import Footer from "./footer"
import Event_Product from "./event"
import Editevent from "./Edit"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

function App() {
  // Filter Data

  let all = useRef(null)
  let event = useRef(null)
  let movie = useRef(null)
  let dining = useRef(null)

  let [filteredData, setFilteredData] = useState([])

  let allFilter = () => {
    all.current.style.backgroundColor = '#9F910E'
    event.current.style.backgroundColor = '#212121'
    movie.current.style.backgroundColor = '#212121'
    dining.current.style.backgroundColor = '#212121'

    setFilteredData('All')
  }

  let eventFilter = ()=> {
    event.current.style.backgroundColor = '#9F910E'
    all.current.style.backgroundColor = '#212121'
    movie.current.style.backgroundColor = '#212121'
    dining.current.style.backgroundColor = '#212121'

    setFilteredData('Events')
  }

  let movieFilter = ()=> {
    movie.current.style.backgroundColor = '#9F910E'
    all.current.style.backgroundColor = '#212121'
    event.current.style.backgroundColor = '#212121'
    dining.current.style.backgroundColor = '#212121'

    setFilteredData('Movies')
  }

  let diningFilter = ()=> {
    dining.current.style.backgroundColor = '#9F910E'
    all.current.style.backgroundColor = '#212121'
    event.current.style.backgroundColor = '#212121'
    movie.current.style.backgroundColor = '#212121'

    setFilteredData('Dining')
  }

  // Search Data 

  let searchRef = useRef(null)

  let handleSearch = () =>{
    searchRef.current.style.display = 'flex'
  }

  let handleClose = () =>{
    searchRef.current.style.display = 'none'
  }

  let [search, setSearch] = useState('')
  let [data, setData] = useState([])

  let handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(()=>{
    axios.get(`http://localhost:3000/Event`)
    .then((res)=>{
      let a = res.data.filter((item)=>{
        return item.category.toLowerCase().includes(search.toLowerCase())
      })
    
      setData(a)    
    })
  },[search])

  return (
    <>
      <BrowserRouter>
        <Navbarcode all={all} event={event} movie={movie} dining={dining} allFilter={allFilter} eventFilter={eventFilter} movieFilter={movieFilter} diningFilter={diningFilter} handleSearch={handleSearch} handleClose={handleClose} searchRef={searchRef} handleChange={handleChange}></Navbarcode>
        <Routes>
          <Route path='/' element={<FormData/>}></Route>
          <Route path="/event" element={<Event_Product filteredData={filteredData} data={data}/>}></Route>
          <Route path="/edit/:id" element={<Editevent/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
