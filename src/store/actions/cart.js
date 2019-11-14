import {
  ADD_TO_CART,
  DEL_FROM_CART,
  DELETE_PRODUCT_FROM_CART,
  CHECKOUT,
  EMPTY_CART,
  SET_CART
} from "../constants";
import axios from "axios";



export const addToCart = product => dispatch => {
  dispatch(cartAction(product));
};

export const cartAction = payload => {
  return { type: ADD_TO_CART, payload };
};

export const emptyCart = () =>{
  return {type: EMPTY_CART}
}
export const setCart = payload => ({
  type: SET_CART,
  payload
});

export const addFromDB = payload => {
  return {type: 'LOAD_FROM_DB', payload}
}
export const setToCart = payload => dispatch => {
  dispatch(setCart(payload));
};

///////////////////////////////////////////////////////////////////////////////

export const deleteProductFromCart = product => dispatch => {
  dispatch(deleteProductAction(product));
};

export const deleteProductAction = payload => {
  return { type: DELETE_PRODUCT_FROM_CART, payload };
};

////////////////////////////////////////////////////////////////////////////////



export const delFromCart = product => dispatch => {
  dispatch(delCartAction(product));
};

export const delCartAction = payload => {
  return { type: DEL_FROM_CART, payload };
};

export const checkOut = obj => dispatch => {
  axios.put("/api/checkout", { cartId: obj.user });
  dispatch(checkOutAction());
};

export const checkOutAction = () => {
  return { type: CHECKOUT };
};
