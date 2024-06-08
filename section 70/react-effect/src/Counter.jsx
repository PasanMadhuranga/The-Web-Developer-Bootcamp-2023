import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(function myEffect() {
    console.log("Effect");
  }, [count])

  const increment = () => setCount((c) => c + 1);
    const handleChange = (e) => setName(e.target.value);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+1</button>
      <br />
        <input
            type="text"
            value={name}
            onChange={handleChange}
        />
    </div>
  );
}
