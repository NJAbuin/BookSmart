import { ADD_TO_CART, DEL_FROM_CART, DELETE_PRODUCT_FROM_CART } from "../constants";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return cartFilter(state, action.payload);
    case DEL_FROM_CART:
      return delProdFromCart(state, action.payload);
    case DELETE_PRODUCT_FROM_CART:
      return state.filter(item => item !== action.payload)
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

const cartFilter = (state, book) => {
  console.log("STATE: ", state, "BOOK: ", book);
  if (state.includes(book)) {
    book.quantity += 1;
  } else {
    book.quantity = 1;
    state.push(book);
  }

  return state;
};
