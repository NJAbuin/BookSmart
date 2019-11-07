import axios from "axios";
import {RECEIVE_USER} from '../constants'

export const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload
})

export const fetchUser = () => dispatch => {
    axios
    .get('/auth/me')
    .then(res=> res.data)
    .then(user => dispatch(receiveUser(user)))
}