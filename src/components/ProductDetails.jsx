import React, { Component } from "react";
import { connect } from "react-redux";
import { selectProduct } from "../store/actions/products";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct2: []
    };
    this.productID = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.selectProduct(this.productID);
  }

 

  
  render() {
    let  product = this.props.product.product[0] || {name: '', imgURL: '', price: '', description: ''}
    
    return (
    
      <div>
        <h1>{product.name}</h1>
        <img src={product.imgURL } />
        <h3>$ {product.price} </h3>
        <p>Synopsis {product.description} </p>
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
