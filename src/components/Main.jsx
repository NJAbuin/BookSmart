import React, { Component } from "react";
import List from "./ProductsContainer";
import axios from "axios";

import { connect } from "react-redux";
import ProductsContainer from "./ProductsContainer";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        LISTA DE Productos
        <ProductsContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { products: state };
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(
  null,
  null
)(Main);
