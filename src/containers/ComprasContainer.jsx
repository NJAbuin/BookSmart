import React from 'react'
import Compras from '../components/Compras'
import { connect } from "react-redux";


class ComprasContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Compras
                transaction={this.props.transaction}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        transaction: state.transaction
    };
};

export default connect(mapStateToProps, null)(ComprasContainer);


