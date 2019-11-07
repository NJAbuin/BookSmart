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
import NavbarContainer from "./NavbarContainer";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(fetchUser());
  }
  render() {
    return (
      <div style={gridContainer}>
        <div style={{ gridArea: "nav" }}>
          <NavbarContainer history={this.props.history} />
        </div>
        <div style={{ gridArea: "side", backgroundColor: "blue" }}>SIDEBAR</div>
        <div
          style={{
            gridArea: "content",
            marginTop: "10px",
            marginRight: "10px"
          }}
        >
          <Switch>
            <Route exact path="/" component={ProductsContainer} />
            <Route exact path="/register" component={RegisterContainer} />
          </Switch>
        </div>
        <div style={{ gridArea: "foot", backgroundColor: "violet" }}>
          FOOTER
        </div>
      </div>
    );
  }
}

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "10% 1fr",
  gridTemplateRows: "minmax(auto, 5%) 1fr 2.5%",
  gridTemplateAreas: `  "nav nav"
  "side content"
  "foot foot"`
};
