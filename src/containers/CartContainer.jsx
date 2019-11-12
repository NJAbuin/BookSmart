import React from "react";
import Cart from "../components/Cart"
import { connect } from "react-redux";


class CartContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Cart cartReducer={this.props.cartReducer} />
        )
    }
}

const mapStateToProps = state => {
    return {
        cartReducer: state.cartReducer
    }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    null
)(CartContainer);

