import "./App.css"
import Chicken from "./Chicken"
import Greeter from "./Greeter"
import Die from "./Die"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"
import Heading from "./Heading"
import ColorList from "./ColorList"
import SlotMachine from "./SlotMachine"

function App() {
  return (
    <div>
      <h1>My first React App</h1>
      <Chicken />
      <Greeter person="Pasan" from="Sithum" />
      <Greeter person="Dimalsha" />
      <Die />
      <Die sides={20} />
      <ListPicker values={[2, 3, 12, 65, 32, 93, 42, 61]}/>
      <ListPicker values={["apple", "banana", "orange", "kiwi", "mango", "papaya"]}/>
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <Heading text="Hello World" />
      <Heading text="Dimalsha" color="yellow" />
      <ColorList colors={["red", "green", "blue", "yellow", "purple", "orange"]} />
      <ColorList colors={["aqua", "brown", "magenta"]} />
      <SlotMachine val1="🍎" val2="🍎" val3="🍎" />
      <SlotMachine val1="🍎" val2="🍌" val3="🍎" />
    </div>
  )
}

export default App
