import React, { Component } from "react";
import { connect } from "react-redux";
import { selectProduct } from "../store/actions/products";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.productID = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.selectProduct(this.productID);
  }

  render() {
    const product = this.props.product.product[0];

    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.imgURL} />
        <h3>$ {product.price} </h3>
        <p>
          {product.description} </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { product: state };
};

const mapDispatchToProps = dispatch => ({
  selectProduct: id => dispatch(selectProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
