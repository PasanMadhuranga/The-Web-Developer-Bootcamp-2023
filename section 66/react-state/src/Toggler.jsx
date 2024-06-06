import { useState } from "react";
import "./Toggler.css";

export default function Toggler() { 
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const toggleHappy = () => setIsHappy(!isHappy);
    const incrementCount = () => setCount(count + 1);
    return (
        <div>
            <h1 className="Toggler" onClick={toggleHappy}>{isHappy ? "😊" : "😔"}</h1>
            <h2>{count}</h2>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}