import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import { addToCart, delFromCart } from "../store/actions/cart";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Cart
        incHandler={this.props.addToCart}
        decHandler={this.props.delFromCart}
        cart={this.props.cart}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => ({
  addToCart: book => dispatch(addToCart(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
