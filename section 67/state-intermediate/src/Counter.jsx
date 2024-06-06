import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  // We use this updater function to update the state when the new state depends on the previous state
  const addThree = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  //   This is not gonna work as expected
  //   const addThree = () => {
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //   }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addOne}>+ 1</button>
      <button onClick={addThree}>+ 3</button>
    </div>
  );
}
