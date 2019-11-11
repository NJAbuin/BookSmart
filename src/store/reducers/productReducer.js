//CONSTANTS//
import { FETCH_PRODUCTS, SEARCH_PRODUCTS, SELECT_PRODUCT } from "../constants";

const initialState = [];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...newstate, ...action.payload];
    case SEARCH_PRODUCTS:
      return [...action.payload];
    case SELECT_PRODUCT:
      return [action.payload];
    case "FILTER_PRODUCT":
      return [action.payload];
    default:
      return state;
  }
};

export const getProducts = state => state.products;
