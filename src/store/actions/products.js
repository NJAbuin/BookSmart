import axios from "axios";
import { FETCH_PRODUCTS, SEARCH_PRODUCTS, SELECT_PRODUCT } from "../constants";

export const getProducts = () => dispatch => {
  axios
    .get(`/api/products`)
    .then(res => res.data)
    .then(response => {
      return dispatch(productAction(response));
    });
};

export const productAction = payload => {
  return { type: FETCH_PRODUCTS, payload };
};

export const getFilterAction = e => dispatch => {
  axios
    .post("/api/category/books", { name: e })
    .then(res => res.data)
    .then(product => {
      return dispatch(searchProductAction(product));
    });
};

export const filterAction = payload => {
  return { type: "FILTER_PRODUCTS", payload };
};

export const searchProducts = inputValue => dispatch => {
  axios
    .get(`/api/products/${inputValue}`)
    .then(res => res.data)
    .then(product => {
      return dispatch(searchProductAction(product));
    });
};

const searchProductAction = payload => {
  return { type: SEARCH_PRODUCTS, payload };
};

export const selectProduct = id => dispatch => {
  axios
    .get(`/api/product/${id}`)
    .then(res => res.data)
    .then(product => {
      return dispatch(selectProductAction(product));
    });
};
const selectProductAction = payload => {
  return { type: SELECT_PRODUCT, payload };
};
