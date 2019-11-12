import { ADD_TO_CART } from "../constants";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return cartFilter(state, action.payload);
    default:
      return state;
  }
};

const limpiaCarros = objArr => {
  let carroLimpio = []; //array<{book:{},quantity:integer}>
  console.log(objArr);
  [objArr].map(e => {
    if (carroLimpio.findIndex(i => i.bookId === e.id) === -1) {
      carroLimpio.push({ quantity: 1, bookId: e.id });
    } else {
      carroLimpio[carroLimpio.findIndex(i => i.bookId === e.id)].quantity += 1;
    }
  });
  return carroLimpio;
};

const cartFilter = (state, book) => {
  if (state.includes(book)) {
    book.quantity += 1;
  } else {
    book.quantity = 1;
    state.push(book);
  }

  return state;
};
