import Die from "./Die";
import "./Dice.css";

export default function Dice({dice, color}) {
    return (
        <div className="Dice">
            {dice.map((d, idx) => (
                <Die key={idx} val={d} color={color} />
            ))}
        </div>
    );
}