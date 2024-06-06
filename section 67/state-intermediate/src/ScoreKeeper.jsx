import { useState } from "react";

export default function ScoreKeeper() {
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0});
    const increaseP1Score = () => setScores((prevScores) => ({...prevScores, p1Score: prevScores.p1Score + 1}));
    const increaseP2Score = () => setScores((prevScores) => ({...prevScores, p2Score: prevScores.p2Score + 1}));
    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player One</button>
            <button onClick={increaseP2Score}>+1 Player Two</button>
        </div>
    )
}