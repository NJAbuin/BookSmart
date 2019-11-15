import React from "react";
import Button from 'react-bootstrap/Button'


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
        <div>
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
                                <div key={transaction.indexOf(transaction)} className="compras-container" >
                                    <div className="transaction-container" >
                                        <div className="transaction-name" >
                                            <div key={product.id} className="transaction-details" >
                                                <p style={{ marginBottom: "0", fontWeight: "bold" }} >{product.name} </p>
                                                <p style={{ marginBottom: "0" }} > {totalValue(product.books)}</p>
                                            </div>



                                        </div>
                                        <div className="transaction-total-state" >

                                            <div className="transaction-total" >
                                                Total: $ {totalValue(product.books)}
                                            </div>

                                            <div className="transaction-state" >
                                                <p style={{ marginBottom: "0" }} >En proceso</p>
                                            </div>

                                        </div>
                                        <div className="transaction-buttons" >
                                            <div>
                                                <a href="">Ver detalle</a>
                                            </div>
                                            Fecha: {transaction[0].createdAt.slice(0, 16)}
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