import './App.css'
import Counter from './Counter'
import Toggler from './Toggler'
import ColorBox from './ColorBox'
import ColorBoxList from './ColorBoxGrid'

function App() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'white', 'brown']
  return (
    <ColorBoxList colors={colors} />
    // <ColorBox colors={colors} />
    // <Toggler />
    // <Counter />
  )
}

export default App
