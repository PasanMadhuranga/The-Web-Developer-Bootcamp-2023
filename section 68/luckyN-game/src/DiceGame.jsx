import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

function defaultWinCheck(dice) {
  return sum(dice) === 7;
}

export default function DiceGame({
  title = "Dice Game",
  numDice = 2,
  winCheck = defaultWinCheck,
}) {
  const [dice, setDice] = useState(() => getRolls(numDice));
  const isWon = winCheck(dice);
  const roll = () => setDice(getRolls(numDice));
  return (
    <>
      <h1>{title}</h1>
      {isWon && <h2 style={{ color: "green" }}>YOU WIN!</h2>}
      <Dice dice={dice} color={isWon ? "green" : "red"} />
      <Button clickFunc={roll} label="Roll" />
    </>
  );
}
