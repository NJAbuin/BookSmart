import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "./RegisterContainer";
import store from "../store";
import { fetchUser } from "../store/actions/user";
import ProductsContainer from "./ProductsContainer";
import NavbarContainer from "./NavbarContainer";
import ProductDetails from "../components/ProductDetails";
import SidebarContainer from "./SidebarContainer";

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
        <div style={{ gridArea: "nav", height: "100%" }}>
          <NavbarContainer history={this.props.history} />
        </div>
        <div style={{ gridArea: "side", backgroundColor: "blue" }}>
          <SidebarContainer />
        </div>
        <div
          style={{
            gridArea: "content",
            margin: "10px",
            height: "minmax(auto, 100%)"
          }}
        >
          <Switch>
            <Route exact path="/" component={ProductsContainer} />
            <Route exact path="/register" component={RegisterContainer} />
            <Route exact path="/products/:id" component={ProductDetails} />
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
  gridTemplateColumns: "15% 1fr",
  gridTemplateRows: "minmax(auto, 8%) 1fr minmax(auto, 4%)",
  gridTemplateAreas: `  "nav nav"
  "side content"
  "foot foot"`,
  height: "100vh"
};
