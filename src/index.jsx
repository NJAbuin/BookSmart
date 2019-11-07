import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Main from "./containers/Main";
import store from "../src/store/index";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
