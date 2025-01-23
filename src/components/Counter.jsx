import { useState, useEffect } from "react";
import { AppHeader } from "./AppHeader";

export function Counter() {
  //let counter = 0; // ordinary variable
  let [counter, setCounter] = useState(0); // state variable

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  function increment() {
    //counter++;
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // counter++;
    // counter++;
    // setCounter(counter + 1);

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    //console.log(counter);
  }
  function decrement() {
    //counter--;
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);

    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    //console.log(counter);
  }

  return (
    <>
      <AppHeader />
      <h4>Counter Component</h4>
      <button type="button" onClick={decrement}>
        -
      </button>
      <span>{counter}</span>
      <button type="button" onClick={increment}>
        +
      </button>
    </>
  );
}
