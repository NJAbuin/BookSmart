import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import { addToCart, delFromCart, deleteProductFromCart } from "../store/actions/cart";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this);
    this.incHandler = this.incHandler.bind(this);
  }

  incHandler(book) {
    this.props.addToCart(book);
    this.forceUpdate();
  }

  deleteProduct(product) {
    this.props.deleteProductFromCart(product)
  }



  render() {
    return (
      <Cart
        deleteProduct={this.deleteProduct}
        incHandler={this.incHandler}
        decHandler={this.props.delFromCart}
        cart={this.props.cart}
      />
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart
  };
};

const mapDispatchToProps = dispatch => ({
  deleteProductFromCart: product => dispatch(deleteProductFromCart(product)),
  addToCart: book => dispatch(addToCart(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
