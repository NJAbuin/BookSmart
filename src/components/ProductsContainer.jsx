import React from "react";
import { getProducts } from "../store/actions/products";
import { connect } from "react-redux";
import 

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
    return (
      <div>
        <ul>
          {/* {props.list.map(e => {
          return <li key={e.id}>{e.firstName}</li>; //TEMPLATE ON HOW TO map props to html items
        })} */}
        </ul>
      </div>
    );
  }
}

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
