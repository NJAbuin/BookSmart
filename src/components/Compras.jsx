import React from "react";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";



export default function Compras(props) {
    console.log("SOY EL ARRAY TRANSACTION", props.transaction)

    const totalValue = function (cart) {

        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            totalPrice += cart[i].price * cart[i]["cartProduct"]["quantity"]
        }
        { console.log(totalPrice) }
        return totalPrice.toFixed(2);
    };

    return (
        <div >
            <div className="cart">
                <h1 style={{ display: "inline-block", margin: "0 0 0 0" }}>
                    Mis Compras
              </h1>
            </div>
            {console.log(props.transaction[0])}
            {props.transaction.map(transaction => {
                console.log(transaction)
                return (
                    transaction.map(product => {

                        { console.log(product) }
                        { console.log(product.books) }
                        if (product.id) {
                            return (
                                <div key={Math.random() * 50000} className="compras-container" >
                                    <div className="transaction-container" >
                                        <div className="transaction-name" >
                                            {
                                                product.books.map(e => {
                                                    return (
                                                        <div key={e.id} className="transaction-details" >
                                                            <Link to={`/products/${e.id}`}>
                                                                <p style={{ marginBottom: "0", fontWeight: "bold" }} >{e.name} </p>
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="transaction-total-state" >

                                            <div className="transaction-total" >
                                                Total: $ {totalValue(product.books)}
                                            </div>

                                            <div className="transaction-state" >
                                                <p style={{ marginBottom: "0" }} >{product.state}</p>
                                            </div>

                                        </div>
                                        <div className="transaction-buttons" >
                                            <div>

                                            </div>
                                            Fecha: {product.createdAt.slice(0, 16)}
                                        </div>
                                    </div>
                                </div>)
                        }
                    })

                )
            })}
        </div>
    )
}
