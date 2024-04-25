import { applyMiddleware, createStore } from "redux";
import AddReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const Store = createStore(
    AddReducer,composeWithDevTools(
    applyMiddleware(thunk))
);

export default Store;