import { useState } from "react";
import "./BoxGrid.css";
import Box from "./Box";

export default function BoxGrid({ numofBoxes = 9 }) {
  const [boxes, setBoxes] = useState(
    Array.from({ length: numofBoxes }, () => false)
  );
  const toggleActive = (idx) =>
    setBoxes((oldBoxes) =>
      oldBoxes.map((active, i) => (i === idx ? !active : active))
    );

    const reset = () => setBoxes(boxes.map(() => false));
  return (
    <>
    <div className="BoxGrid">
      {boxes.map((active, i) => {
        return (
          <Box key={i} isActive={active} toggleFunc={() => toggleActive(i)} />
        );
      })}
    </div>
    <button onClick={reset}>Reset</button>
    </>
  );
}
