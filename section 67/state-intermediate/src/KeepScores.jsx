import { useState } from "react";

export default function KeepScores({ players = 5, target = 10 }) {
  const [scores, setScores] = useState(new Array(players).fill(0));
  const [isGameOver, setIsGameOver] = useState(false);

  const incrementScore = (index) => {
    setScores((preScores) =>
      preScores.map((score, i) => {
        const newScore = i === index ? score + 1 : score;
        if (newScore >= target) {
          setIsGameOver(true);
        }
        return newScore;
      }))
  };

  const resetScores = () => {
    setIsGameOver(false);
    setScores(new Array(players).fill(0));
  };

  return (
    <div>
      <h1>Score Keeper</h1>
      {scores.map((score, idx) => {
        return (
          <li key={idx}>
            Player {idx + 1}: {score}
            <button onClick={() => incrementScore(idx)} disabled={isGameOver}>+</button>
            {score >= target && <strong style={{color: "red"}}>WINNER!</strong>}
          </li>
        );
      })}
      <button onClick={resetScores}>Reset</button>
    </div>
  );
}
