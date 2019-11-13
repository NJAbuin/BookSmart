import React from "react";
import { connect } from "react-redux";
import { searchProducts } from "../store/actions/products";
import Navbar from "../components/Navbar";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(evt) {
    const value = evt.target.value;
    this.setState({ inputValue: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.searchProducts(this.state.inputValue);
    this.props.history && this.props.history.push("/");
  }

  render() {
    return (
      <Navbar
        cart={this.props.cart}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
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
  searchProducts: inputValue => dispatch(searchProducts(inputValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
