import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import { deleteToCart } from "../store/actions/cart"

class CartContainer extends React.Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)
  }

  deleteProduct(product) {
    console.log("ME CLICKIASTE", product)
    this.props.deleteToCart(product)
  }

  render() {
    return <Cart
      cart={this.props.cart}
      deleteProduct={this.deleteProduct}
    />;
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => ({
  deleteToCart: product => dispatch(deleteToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
