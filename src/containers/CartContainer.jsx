import React from "react";
import Cart from "../components/Cart"
import { connect } from "react-redux";


class CartContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Cart />
        )
    }
}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({

});

export default connect(
    null,
    null
)(CartContainer);

