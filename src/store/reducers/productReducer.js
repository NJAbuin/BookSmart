//CONSTANTS//
import { FETCH_PRODUCTS } from "../constants";

const initialState = [];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const getProducts = state => state.products;
