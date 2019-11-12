import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Cart cart={this.props.cart} />;
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, null)(CartContainer);
