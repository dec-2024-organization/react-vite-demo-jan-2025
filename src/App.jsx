import "./App.css";
import { Fragment } from "react";
import Display from "./components/Display";
import { ToggleName } from "./components/ToggleName";
import { Counter } from "./components/Counter";
import ListCity from "./components/ListCity";
import { ArrayDestructure } from "./components/ArrayDestructure";
import { ObjectDestructure } from "./components/ObjectDestructure";
function App() {
  return (
    // <div>
    // <Fragment>
    <>
      <h2>App Component</h2>
      {/* <Display></Display>
      <ToggleName></ToggleName>
      <Counter></Counter>
      <ListCity></ListCity>
      <ArrayDestructure></ArrayDestructure> */}
      <ObjectDestructure></ObjectDestructure>
    </>
    //</Fragment>
    // </div>
  );
}

export default App;
