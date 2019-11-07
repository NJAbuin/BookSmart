import {RECEIVE_USER} from '../constants'

const initialState = {}

export function userReducer(state = initialState, action){
    switch(action.type){
        case RECEIVE_USER:
            return action.payload
        default:
            return state
    }
}