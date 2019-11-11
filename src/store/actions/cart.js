import axios from "axios";
import { ADD_TO_CART } from "../constants";

export const addToCart = product => dispatch => {
  console.log("PRODUCT");
  console.log(product.id);
  dispatch(cartAction(product));
  axios.post(`/api/product/${product.id}`).then(res => res.data);
};

export const cartAction = payload => {
  return { type: ADD_TO_CART, payload };
};
