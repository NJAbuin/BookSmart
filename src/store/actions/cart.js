import {
  ADD_TO_CART,
  DEL_FROM_CART,
  DELETE_PRODUCT_FROM_CART
} from "../constants";

export const addToCart = product => dispatch => {
  dispatch(cartAction(product));
};

export const cartAction = payload => {
  return { type: ADD_TO_CART, payload };
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
