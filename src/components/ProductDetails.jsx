import React, { Component } from "react";
import { connect } from "react-redux";
import { selectProduct } from "../store/actions/products";
import Button from "react-bootstrap/Button";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct2: []
    };
    this.productID = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.selectProduct(this.props.match.params.id);
  }

  render() {
    const buttonStyle = {
      border: "none",
      outline: "0",
      padding: "12px",
      cursor: "pointer",
      width: "100%",
      fontSize: "18px",
      gridArea: "add",
      alignSelf: "center",
      justifySelf: "center"
    };

    let product = this.props.product.product[0] || {
      name: "",
      imgURL: "",
      price: "",
      description: "",
      category: []
    };

    return (
      <div>
        <div className="product-container">
          <div className="img-container">
            <img src={product.imgURL} />
          </div>
          <div className="product-details">
            <h1 className="product-name">{product.name}</h1>
            <h3>Author: {product.author}</h3>
            <h5 className="category-product-details">
              {product.category[0] || ""}
            </h5>
            <h2>Sinopsis</h2>
            <p>{product.description.slice(0, 300) + "..."} </p>
            <h5>{product.year}</h5>
            <h3> $ {product.price} </h3>
            <Button variant="success">Add to Cart</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { product: state };
};

const mapDispatchToProps = dispatch => ({
  selectProduct: id => dispatch(selectProduct(id)),
  addToCart: input => dispatch(addToCart(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
