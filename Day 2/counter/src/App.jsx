import Counter1 from "./component/counter1"
import Counter2 from "./component/counter2"
import Counter3 from "./component/counter3"
import "./App.css"
import { useState } from "react"

function App() {
    let [count, setCount] = useState(0)

    let hendleIncrease = ()=>{
        setCount(count + 1)
    }

    let hendleDecrease = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }    

    return (
        <div className="body">
            <h1 className="head">Counter</h1>

            <div className="allDisplay">
                <Counter1 Madhav={count}></Counter1>
                <Counter2 Madhav={count}></Counter2>
                <Counter3 Madhav={count}></Counter3>
            </div>

            <div>
                <button onClick={hendleIncrease}>+</button>
                <button onClick={hendleDecrease}>-</button>
            </div>
        </div>    
    )
}

export default App
