import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import {
  addToCart,
  setToCart,
  deleteProductFromCart,
  addTransaction
} from "../store/actions/cart";
import axios from "axios";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this);
    this.addTransactionToStore = this.addTransactionToStore.bind(this);
    this.incHandler = this.incHandler.bind(this);
    this.updateFromDB = this.updateFromDB.bind(this);

  }

  incHandler(book) {
    this.props.addToCart(book);
  }

  deleteProduct(product) {
    this.props.deleteProductFromCart(product);
    axios
      .post("/api/removeFromCart", {
        userId: this.props.user.id,
        book: product.id
      })
      .then(resp => console.log(resp));
  }

  updateFromDB(product){
    console.log(product)
    axios.post('/api/updateCart', {userId: this.props.user.id, bookId: product.id, quantity: product.quantity})
  }

  addOnetoDB(product){}

  addTransactionToStore(cart) {
    console.log("LLEGO EL CART", cart)
    this.props.addTransaction(cart)
  }

  componentDidMount() {
    let window = localStorage;
    if (!this.props.user.id) {
      if (this.props.cart.length == 0) {
        this.props.setToCart(JSON.parse(window.cart));
      }
    }
  }

  render() {
    return (
      <Cart
        addTransactionToStore={this.addTransactionToStore}
        deleteProduct={this.deleteProduct}
        incHandler={this.incHandler}
        decHandler={this.props.delFromCart}
        cart={this.props.cart}
        user={this.props.user}
        updateFromDB={this.updateFromDB}
      />
    );
  }
}

const mapStateToProps = ({ cart, user }) => {
  return {
    cart,
    user
  };
};

const mapDispatchToProps = dispatch => ({
  deleteProductFromCart: product => dispatch(deleteProductFromCart(product)),
  addToCart: book => dispatch(addToCart(book)),
  setToCart: cart => dispatch(setToCart(cart)),
  addTransaction: cart => {
    dispatch(addTransaction(cart))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
