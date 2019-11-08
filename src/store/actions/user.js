import axios from "axios";
import { RECEIVE_USER, EMPTY_USER } from "../constants";

export const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
});

export const emptyUser = () => ({
  type: EMPTY_USER
});

export const fetchUser = () => dispatch => {
  axios
    .get("/auth/me")
    .then(res => res.data)
    .then(user => {
      return dispatch(receiveUser(user));
    });
  // axios
  //   .get("/auth/me")
  //   .then(res => res.data)
  //   .then(user => dispatch(receiveUser(user)));
};
