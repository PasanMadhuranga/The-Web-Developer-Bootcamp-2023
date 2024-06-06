import { useState } from "react";

function generateGameBoard() {
    console.log("Generating game board");
    return Array(50)
}

export default function Dumbo() {
    // This will run generateGameBoard function and ignore the return value every time the component re-renders
    // const [board, setBoard] = useState(generateGameBoard());

    // This will run generateGameBoard function only once when the component is first rendered
    const [board, setBoard] = useState(generateGameBoard);

    return (
        <div>
            <p>Game board: {board.length}</p>
            <button onClick={() => setBoard("Hello")}>Change State</button>
        </div>
    );
}