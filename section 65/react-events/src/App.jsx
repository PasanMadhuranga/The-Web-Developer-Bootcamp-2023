import "./App.css";
import Clicker from "./Clicker";
import Form from "./Form";
import AlertClicker from "./AlertClicker";

function App() {
  return (
    <>
      <Form />
      <Clicker />
      <AlertClicker msg="Button was clicked!!!" btnText="Click Alert Button" />
      <AlertClicker msg="I said Don't CLICK ME" btnText="Don't Click Me" />
    </>
  );
}

export default App;
