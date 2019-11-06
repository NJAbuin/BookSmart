import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
); //ADD NEW COMPONENTS TO MAIN
