import axios from "axios";
import {
  ADD_TO_CART,
  DEL_FROM_CART,
  DELETE_TO_CART,
  CHECKOUT
} from "../constants";

export const addToCart = product => dispatch => {
  dispatch(cartAction(product));
  axios.post(`/api/product/${product.id}`).then(res => res.data);
};

export const cartAction = payload => {
  return { type: ADD_TO_CART, payload };
};

///////////////////////////////////////////////////////////////////////////////

// export const deleteToCart = product => dispatch => {
//   dispatch(deleteAction(product));
// }

// export const deleteAction = payload => {
//   return { type: DELETE_TO_CART, payload };
// }
export const delFromCart = product => dispatch => {
  dispatch(delCartAction(product));
  // axios.post(`/api/product/${product.id}`).then(res => res.data);
};

export const delCartAction = payload => {
  return { type: DEL_FROM_CART, payload };
};

export const checkOut = obj => dispatch => {
  console.log("!!!!!!!!!!!!!!!!", obj.cart);
  console.log("!!!!!!!!!!", obj.user);
  axios.put("/api/checkout", { cartId: obj.user });
  dispatch(checkOutAction());
};

export const checkOutAction = () => {
  return { type: CHECKOUT };
};
