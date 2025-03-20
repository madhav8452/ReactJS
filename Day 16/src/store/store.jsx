import { createStore } from "redux";
import counterReducer from "../Redux/counterSlice";

const store = createStore(counterReducer)

export default store