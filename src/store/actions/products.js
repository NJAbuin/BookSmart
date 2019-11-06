import axios from "axios";
import { FETCH_PRODUCTS } from "../constants";

export const fetchProducts = () => dispatch => {
  console.log("Fetching products");
  axios.get(`${omdb}s=${title}`).then(response =>
    dispatch({
      type: FETCH_MOVIES,
      payload: response
    })
  );
};
