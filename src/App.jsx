import "./App.css";
import { Fragment } from "react";
import Display from "./components/Display";
import { ToggleName } from "./components/ToggleName";
import { Counter } from "./components/Counter";

function App() {
  return (
    // <div>
    // <Fragment>
    <>
      <h2>App Component</h2>
      <Display></Display>
      <ToggleName></ToggleName>
      <Counter></Counter>
    </>
    //</Fragment>
    // </div>
  );
}

export default App;
