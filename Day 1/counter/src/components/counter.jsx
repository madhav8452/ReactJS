import "./counter.css"
import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)

    const hendleIncrease = ()=>{
        setCount(count + 1)
    }

    const hendledecrease = ()=>{
        setCount(count - 1)
    }

    return <div className="counterDiv">
        <h1>Counter</h1>
        <div className="display">
            {count}
        </div>
        <div>
            <button onClick={hendleIncrease}>+</button>
            <button onClick={hendledecrease}>-</button>
        </div>
    </div>
}

export default Counter