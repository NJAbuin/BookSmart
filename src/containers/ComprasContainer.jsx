import React from 'react'
import Compras from '../components/Compras'
import { connect } from "react-redux";


class ComprasContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Compras />
        )
    }
}


export default connect(null, null)(ComprasContainer);


