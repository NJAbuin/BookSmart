import React, { Component } from "react";
import axios from "axios";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter,
  withRouter
} from "react-router-dom";
import RegisterContainer from "./RegisterContainer";
import store from "../store";
import { fetchUser } from "../store/actions/user";
import LoginContainer from "./LoginContainer";
import ProductsContainer from "./ProductsContainer";
import NavbarContainer from "./NavbarContainer"

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(fetchUser());
  }
  render() {
    return (
      <div>
        <NavbarContainer history={this.props.history} />

        <Switch>
          <Route exact path="/" component={ProductsContainer} />
        </Switch>
      </div>
    );
  }
}
