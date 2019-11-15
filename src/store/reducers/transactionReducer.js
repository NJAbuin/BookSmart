import ADD_TRANSACTION from '../constants'

const initialState = [];

export const transactionReducer = (state = initialState, action) => {
    console.log("LLEGUE AL STORE", action)
    switch (action.type) {
        case "ADD_TRANSACTION":
            console.log("ESTOY EN EL CASE")
            console.log("SOY LA ACTION:PAYLOAD", action.payload)
            return [...state, action.payload]
        default:
            return state;
    }
};


