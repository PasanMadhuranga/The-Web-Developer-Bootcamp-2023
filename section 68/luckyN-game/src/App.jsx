import './App.css'
import DiceGame from './DiceGame'
import { sum } from './utils'

function allSame(dice) {
  return dice.every(d => d === dice[0])
}

function lessThanTen(dice) {
  return sum(dice) < 10
}

function App() {

  return (
    <>
      <DiceGame title='Less Than 10' winCheck={lessThanTen} numDice={3}/>
      <DiceGame />
    </>
  )
}

export default App
