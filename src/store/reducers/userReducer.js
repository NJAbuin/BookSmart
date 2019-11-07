import {RECEIVE_USER, EMPTY_USER} from '../constants'

const initialState = {}

export function userReducer(state = initialState, action){
    switch(action.type){
        case RECEIVE_USER:
            return action.payload
        case EMPTY_USER:
            return {}
        default:
            return state
    }
}