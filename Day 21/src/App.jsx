import { useReducer } from "react"

const initialState = 0

const reducer = (state, action)=>{
  switch(action){
    case 'inc1' :
      return state += 1
    case 'inc10' :
      return state += 10
    case 'inc100' :
      return state += 100
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div className="border w-full h-screen flex flex-col justify-center items-center">
        <p className="font-bold text-4xl mb-10">Counter</p>
        <div className="border border-[gray] w-[200px] h-[50px] rounded flex justify-center items-center">{count}</div>
        <div className="mt-10 w-[350px] flex justify-between">
          <button className="border w-[100px] h-[40px] rounded bg-black text-white cursor-pointer" onClick={()=>{dispatch('inc1')}}>+1</button>
          <button className="border w-[100px] h-[40px] rounded bg-black text-white cursor-pointer" onClick={()=>{dispatch('inc10')}}>+10</button>
          <button className="border w-[100px] h-[40px] rounded bg-black text-white cursor-pointer" onClick={()=>{dispatch('inc100')}}>+100</button>
        </div>
      </div>
    </>
  )
}

export default App
