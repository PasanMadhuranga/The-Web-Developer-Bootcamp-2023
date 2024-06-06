import { useState } from "react";

export default function Counter(){
    const [num, setNum] = useState(0);
    const Increment = () => setNum(num + 1);
    const Decrement = () => setNum(num - 1);
    return (
        <div>
            <h1>Counter</h1>
            <h3>Count: {num}</h3>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            {num == 10 && <h2 style={{color: "magenta"}}>Counter Reached 10</h2>}
        </div>
    )
}