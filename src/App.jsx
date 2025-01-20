import "./App.css";
import { Fragment } from "react";
import Display from "./components/Display";
import { ToggleName } from "./components/ToggleName";
import { Counter } from "./components/Counter";
import ListCity from "./components/ListCity";
import { ArrayDestructure } from "./components/ArrayDestructure";
import { ObjectDestructure } from "./components/ObjectDestructure";
import { BookList } from "./components/books/BookList";
import { FruitList } from "./components/fruits/FruitList";
import { TodoList } from "./components/todos/TodoList";
import { CaptureTextData } from "./components/CaptureTextData";
import { BookAdd } from "./components/books/BookAdd";
function App() {
  return (
    // <div>
    // <Fragment>
    <>
      {/* <h2>App Component</h2> */}
      {/* <Display></Display> */}
      {/* <ToggleName></ToggleName> */}
      {/* <Counter></Counter>
      <ListCity></ListCity>
      <ArrayDestructure></ArrayDestructure> */}
      {/* <ObjectDestructure></ObjectDestructure> */}
      {/* <BookList></BookList> */}
      <BookAdd></BookAdd>
      {/* <FruitList></FruitList> */}
      {/* <TodoList></TodoList> */}
      {/* <CaptureTextData></CaptureTextData> */}
    </>
    //</Fragment>
    // </div>
  );
}

export default App;
