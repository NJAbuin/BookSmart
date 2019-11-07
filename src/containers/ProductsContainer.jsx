import React from "react";
import { getProducts } from "../store/actions/products";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [] //array of user objects
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    let productList = this.props.products.product;
    return (
      <div>
        >
        <ul style={containerStyle}>
          {productList.map(e => (
            <SingleProduct key={e.id} info={e} />
          ))}
        </ul>
      </div>
    );
  }
}

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr ",
  gridGap: "2rem",
  justifyItems: "auto",
  alignItems: "auto"
};

const mapStateToProps = state => {
  return { products: state };
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
