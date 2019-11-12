import { combineReducers } from "redux";
import { productsReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";

const reducers = {
  product: productsReducer,
  user: userReducer,
  cartReducer: cartReducer
};

export default combineReducers(reducers);
