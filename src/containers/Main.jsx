import React, { Component } from "react";

import axios from "axios";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter,
  withRouter,
  Link
} from "react-router-dom";
import Register from "../components/Register";
import ProductsContainer from "./ProductsContainer";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <ProductsContainer />
          {/* ESTO DEBERIA SOLO RENDERIZARSE EN LA RUTA EXACT "/products" via link en NavBar */}
          {/* <Link to="/products">All Products</Link>
          <Route exact to="/products" Component={ProductsContainer} /> */}
        </Switch>
      </div>
    );
  }
}
