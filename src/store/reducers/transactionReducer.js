import GET_CARTS_FROM_DB from '../constants'


const initialState = [];

export const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CARTS_FROM_DB":
            console.log("SOY LA ACTION PAYLOAD", action.payload)
            return [...state, action.payload]
        default:
            return state;
    }
};


