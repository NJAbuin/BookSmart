import { combineReducers } from "redux";
import { productsReducer } from "./productReducer";

const reducers = { product: productsReducer };

export default combineReducers(reducers);
