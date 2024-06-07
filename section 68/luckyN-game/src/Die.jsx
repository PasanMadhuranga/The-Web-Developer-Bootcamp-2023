import "./Die.css"

export default function Die({ val, color = "#000" }) {
  return (
    <div className="Die" style={{ backgroundColor: color }}>
      {val}
    </div>
  );
}
