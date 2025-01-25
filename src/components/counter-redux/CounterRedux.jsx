import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { AppHeader } from "../AppHeader";

const CounterRedux = () => {
  // Access the count value from the Redux store
  const count = useSelector((state) => state.count);
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  return (
    <>
      <AppHeader />
      <div className="container m-5 text-center">
        <h1>Count: {count}</h1>
        <button
          className="btn btn-success"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default CounterRedux;
