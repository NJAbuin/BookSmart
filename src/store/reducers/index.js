import { combineReducers } from "redux";
import { productsReducer } from "./productReducer";
import { userReducer } from './userReducer'

const reducers = { product: productsReducer, user: userReducer };

export default combineReducers(reducers);
