import { createStore } from "redux";
import counterReducer from "./counterSlice";

// Create a Redux store holding the state of the counter
const store = createStore(counterReducer);

export default store;
