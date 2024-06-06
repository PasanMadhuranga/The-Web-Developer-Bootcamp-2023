import { useState } from "react";
import "./ColorBox.css";

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function ColorBox({ colors }) {
  const [color, setColor] = useState(randChoice(colors));
  const changeColor = () => {
    let randomColor = randChoice(colors);
    setColor(randomColor);
  };
  return <div className="ColorBox" style={{ backgroundColor: color}} onClick={changeColor}></div>;
}
