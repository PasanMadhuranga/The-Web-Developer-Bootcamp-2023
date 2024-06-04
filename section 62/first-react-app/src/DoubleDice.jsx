function DoubleDice() {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const isWinner = dice1 === dice2;
  const styles = {color: isWinner ? "green" : "red"}

  return (
    <div style={styles}>
      <h1>DOUBLE DICE ROLL</h1>
      {isWinner && <h3>YOU WIN!!!</h3>}
      <p>First Die: {dice1}</p>
      <p>Second Die: {dice2}</p>
    </div>
  );
}

// function DoubleDice() {
//     const dice1 = Math.floor(Math.random() * 6) + 1;
//     const dice2 = Math.floor(Math.random() * 6) + 1;
//     const msg = dice1 === dice2 ? "DOUBLES!" : "Not Doubles";

//     return (
//         <div>
//             <h1>DOUBLE DICE ROLL</h1>
//             {dice1 === dice2 ? <h3>YOU WIN!!!</h3> : null }
//             <p>First Die: {dice1}</p>
//             <p>Second Die: {dice2}</p>
//         </div>
//     )
// }

// function DoubleDice() {
//     const dice1 = Math.floor(Math.random() * 6) + 1;
//     const dice2 = Math.floor(Math.random() * 6) + 1;
//     return (
//         <div>
//             <h1>{dice1 === dice2 ? "DOUBLES!" : "Not Doubles"}</h1>
//             <p>First Die: {dice1}</p>
//             <p>Second Die: {dice2}</p>
//         </div>
//     )
// }

// function DoubleDice() {
//     const dice1 = Math.floor(Math.random() * 6) + 1;
//     const dice2 = Math.floor(Math.random() * 6) + 1;
//     const msg = dice1 === dice2 ? "DOUBLES!" : "Not Doubles";

//     return (
//         <div>
//             <h1>{msg}</h1>
//             <p>First Die: {dice1}</p>
//             <p>Second Die: {dice2}</p>
//         </div>
//     )
// }

export default DoubleDice;
