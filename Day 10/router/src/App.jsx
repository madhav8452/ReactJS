import MainRouter from './Routes/mainRoute'
import Navbar from './component/Navbar'

function App() {
  return (
    <div className='border border-[red] w-[100%]'>
      <Navbar></Navbar>
      <MainRouter></MainRouter>
    </div>
  )
}

export default App
