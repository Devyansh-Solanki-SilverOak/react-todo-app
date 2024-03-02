import { combineReducers, createStore } from "redux";
import Reducer from "./Reducer";

const reducer = combineReducers({list: Reducer});

const store = createStore(reducer);

export default store;