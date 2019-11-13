import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "./RegisterContainer";
import store from "../store";
import { fetchUser } from "../store/actions/user";
import ProductsContainer from "./ProductsContainer";
import NavbarContainer from "./NavbarContainer";
import ProductDetails from "../components/ProductDetails"; 1
import SidebarContainer from "./SidebarContainer";
import CartContainer from "./CartContainer"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ComprasContainer from "./ComprasContainer";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(fetchUser());
  }

  render() {
    return (
      <div className="container-fluid">
        <div>
          <Row>
            <Col sm="12">
              <NavbarContainer />
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <br />
        <Row>
          <SidebarContainer />

          <Col sm="12" md="8">
            <Switch>
              <Route exact path="/" component={ProductsContainer} />
              <Route exact path="/cart" component={CartContainer} />
              <Route exact path="/compras" component={ComprasContainer} />
              <Route exact path="/register" component={RegisterContainer} />
              <Route exact path="/products/:id" component={ProductDetails} />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "15% 1fr",
  gridTemplateRows: "7% 1fr minmax(auto, 4%)",
  gridTemplateAreas: `  "nav nav"
  "side content"
  "foot foot"`,
  height: "100vh"
};
