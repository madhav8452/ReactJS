import { useEffect, useState } from "react"

function App() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let [record, setRecord] = useState([])
  let [editIndex, setEditIndex] = useState(null)

  // ADD DATA

  let handleSubmit = ()=>{
    if(editIndex == null){
      let obj = {id: Date.now(), email, password}
      setRecord([...record, obj])
      localStorage.setItem("user", JSON.stringify([...record, obj]))  
    }
    else{
      let singleData = record.find((item)=>item.id == editIndex)
      singleData.id = editIndex
      singleData.email = email
      singleData.password = password
      
      localStorage.setItem("user", JSON.stringify(record))
      setEditIndex(null)
    }
    setEmail('')
    setPassword('')
  }

  // GET DATA

  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("user")) || []
    setRecord(data)
  },[])

  // DELETE DATA

  let handleDelete = (id)=>{
    let data = record.filter((el)=>el.id != id)
    setRecord(data)
    localStorage.setItem("user", JSON.stringify(data))
  }

  // EDIT DATA

  let handleEdit = (id)=>{
    let singleData = record.find((el)=>el.id == id)
    setEmail(singleData.email)
    setPassword(singleData.password)
    setEditIndex(id)
  }

  return (
    <>
      <div className="flex flex-col p-10">
        <input type="text" placeholder="Enter Email" className="border border-black w-[300px] h-[40px] rounded ps-5 mt-2" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder="Enter Password" className="border border-black w-[300px] h-[40px] rounded ps-5 mt-2" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button className="border border-black w-[150px] h-[40px] rounded mt-5 cursor-pointer" onClick={handleSubmit}>{editIndex == null ? 'Submit' : 'Update'}</button>
      </div>

      <table className="border border-black w-full">
        <thead>
          <tr>
            <th className="border border-black p-3">Email</th>
            <th className="border border-black p-3">Password</th>
            <th className="border border-black p-3" colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          { record 
          ? record.map((el)=>{
              return <tr>
                <td className="border border-black p-3">{el.email}</td>
                <td className="border border-black p-3">{el.password}</td>
                <td className="border border-black p-3"><button className="border border-black w-[100px] h-[30px] rounded cursor-pointer" onClick={()=>{handleEdit(el.id)}}>Edit</button></td>
                <td className="border border-black p-3"><button className="border border-black w-[100px] h-[30px] rounded cursor-pointer" onClick={()=>{handleDelete(el.id)}}>Delete</button></td>
              </tr>
          })
          : <p>Loading...</p> }
        </tbody>
      </table>
    </>
  )
}

export default App
