import React from 'react'
import Compras from '../components/Compras'
import { connect } from "react-redux";
import { getCartsFromDb } from '../store/actions/cart'
import Axios from 'axios';




class ComprasContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        Axios.get("/api/auth/me")
            .then(res => res.data)
            .then(user => this.props.getCartsFromDb(user.id))
    }



    render() {
        return (
            <Compras
                transaction={this.props.transaction}
            />
        )
    }
}

const mapStateToProps = ({ transaction, user }) => {
    return {
        transaction,
        user
    };
};

const mapDispatchToProps = dispatch => ({
    getCartsFromDb: userId => dispatch(getCartsFromDb(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ComprasContainer);


