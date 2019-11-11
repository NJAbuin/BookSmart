import axios from "axios";
import { ADD_TO_CART } from "../constants";

export const addToCart = product => dispatch => {
  console.log("PRODUCT");
  console.log(product.id);
  axios
    .post(`/api/product/${product.id}`)
    .then(res => res.data)
    .then(response => {
      console.log(response);
      return dispatch(cartAction(product.id));
    });
};

export const cartAction = payload => {
  return { type: ADD_TO_CART, payload };
};
