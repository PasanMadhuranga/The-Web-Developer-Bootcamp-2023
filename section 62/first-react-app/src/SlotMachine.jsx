function SlotMachine({ val1, val2, val3 }) {
  const isWon = val1 === val2 && val2 === val3;
  return (
    <div>
      <h1>Slot Machine</h1>
      <h1>
        {val1} {val2} {val3}
      </h1>
          <h2 style={{ color: isWon ? "green" : "red" }}>{isWon ? "YOU WIN!!!" : "YOU LOSE :("}</h2>
          { isWon && <h3>Congrats!!!</h3>}
    </div>
  );
}

export default SlotMachine;
