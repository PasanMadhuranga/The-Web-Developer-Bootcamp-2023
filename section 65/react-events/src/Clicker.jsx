function handleClick() {
  console.log("Button was clicked");
}

function handleMouseOver() {
  console.log("Mouse is over");
}

export default function Clicker() {
  return (
    <div>
      <p onMouseOver={handleMouseOver}>Hover Over Me</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
