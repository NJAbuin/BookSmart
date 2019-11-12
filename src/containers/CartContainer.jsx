import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import { addToCart, delFromCart, deleteProductFromCart } from "../store/actions/cart";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)
  }

  deleteProduct(product) {
    this.props.deleteProductFromCart(product)
  }

  render() {
    return (
      <Cart
        deleteProduct={this.deleteProduct}
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
  deleteProductFromCart: product => dispatch(deleteProductFromCart(product)),
  addToCart: book => dispatch(addToCart(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
