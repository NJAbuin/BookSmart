import axios from "axios";
import { FETCH_PRODUCTS } from "../constants";

export const getProducts = () => dispatch => {
  axios
    .get(`/api/products`)
    .then(res => res.data)
    .then(response => {
      return dispatch({
        type: FETCH_PRODUCTS,
        payload: response
      });
    });
};
