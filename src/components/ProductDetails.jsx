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
        <h1>TITLE: {product.name}</h1>
        <img
          src={
            "https://quittingbydesign.com/wp-content/uploads/2018/09/image-coming-soon-placeholder.jpg"
          }
        />
        <p>PRICE: {product.price} </p>
        <p>DESCRIPCION: {product.description} </p>
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
