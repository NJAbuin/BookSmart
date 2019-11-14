import {
  ADD_TO_CART,
  DEL_FROM_CART,
  DELETE_PRODUCT_FROM_CART,
  CHECKOUT,
  EMPTY_CART,
  SET_CART
} from "../constants";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return cartFilter(state, action.payload);
    case DEL_FROM_CART:
      return delProdFromCart(state, action.payload);
    case CHECKOUT:
      return [];
    case DELETE_PRODUCT_FROM_CART:
      let found = state.find(book => {
        return book.id == action.payload.id;
      });
      found.quantity = 0;
      return [...state];
    case EMPTY_CART:
      return [];
    case SET_CART:
      return [...action.payload];
    case "LOAD_FROM_DB":
      return [...action.payload];
    default:
      return state;
  }
};

const delProdFromCart = (state, decreaser) => {
  let found = state.find(book => {
    return book.id == decreaser.id;
  });
  found.quantity -= 1;
  if (found.quantity === 0) state = state.filter(book => book !== found);

  return [...state];
};

const cartFilter = (state, added) => {
  let found = state.find(book => {
    return book.id == added.id;
  });

  if (found) {
    found.quantity += 1;
  } else {
    added.quantity = 1;
    state = [...state, added];
  }

  return [...state];
};
