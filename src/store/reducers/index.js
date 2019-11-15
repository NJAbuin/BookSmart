import { combineReducers } from "redux";
import { productsReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { transactionReducer } from "./transactionReducer"

const reducers = {
  product: productsReducer,
  user: userReducer,
  cart: cartReducer,
  transaction: transactionReducer
};

export default combineReducers(reducers);
