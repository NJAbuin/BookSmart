import React from 'react'
import Compras from '../components/Compras'
import { connect } from "react-redux";
import { getCartsFromDb } from '../store/actions/cart'




class ComprasContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getCartsFromDb(this.props.userId)
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
        transaction: state.transaction,
        userId: state.user.id
    };
};

const mapDispatchToProps = dispatch => ({
    getCartsFromDb: userId => dispatch(getCartsFromDb(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ComprasContainer);


