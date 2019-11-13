import { ADD_TO_CART, DEL_FROM_CART, CHECKOUT } from "../constants";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return cartFilter(state, action.payload);
    case DEL_FROM_CART:
      return delProdFromCart(state, action.payload);
    case CHECKOUT:
      return initialState;
    default:
      return state;
  }
};

const delProdFromCart = (state, book) => {
  if (book.quantity === 1) {
    state.splice(state[state.indexOf(book)], 1);
  } else {
    book.quantity -= 1;
  }
  return state;
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

  return state;
};
