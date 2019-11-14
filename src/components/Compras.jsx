import React from "react";
import Button from 'react-bootstrap/Button'


const cart = [
    { state: "en proceso" },
    {
        id: 1,
        name: "Fernández & Fernández",
        price: 399.99,
        quantity: 3
    },
    {
        id: 2,
        name: "Sexo ATR",
        price: 419.99,
        quantity: 2
    },
    {
        id: 3,
        name: "Andiamos",
        price: 319.99,
        quantity: 2
    }
]

const cart1 = [
    { state: "confirmada" },
    {
        id: 1,
        name: "Budismo Practico",
        price: 244.99,
        quantity: 2
    },
    {
        id: 2,
        name: "Todo esta j*dido",
        price: 145,
        quantity: 6
    },
    {
        id: 3,
        name: "Andiamos",
        price: 319.99,
        quantity: 2
    }
]

const cart2 = [
    { state: "cancelada" },
    {
        id: 1,
        name: "Predicciones 2020",
        price: 279.99,
        quantity: 2,

    },
    {
        id: 1,
        name: "Budismo Practico",
        price: 244.99,
        quantity: 1
    },
    {
        id: 2,
        name: "Todo esta j*dido",
        price: 145,
        quantity: 3
    },
]

const transactions = [cart, cart1, cart2]


export default function Compras() {

    const totalValue = function (cart) {
        let totalPrice = 0;
        for (let i = 1; i < cart.length; i++) {
            totalPrice += cart[i].price * cart[i].quantity;
        }
        return totalPrice.toFixed(2);
    };

    return (
        <div>
            <div className="cart">
                <h1 style={{ display: "inline-block", margin: "0 0 0 0" }}>
                    Mis Compras
              </h1>
            </div>
            {transactions.map(transaction => {
                return (

                    <div className="compras-container" >
                        <div className="transaction-container" >
                            <div className="transaction-name" >
                                {transaction.map(product => {
                                    if (product.name) {
                                        return (
                                            <div className="transaction-details" >
                                                <p style={{ marginBottom: "0", fontWeight: "bold" }} >{product.name} </p>
                                                <p style={{ marginBottom: "0" }} > ${product.price} x {product.quantity}</p>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <div className="transaction-total-state" >
                                <div className="transaction-total" >
                                    Total: $ {totalValue(transaction)}
                                </div>
                                {
                                    transaction[0].state === "en proceso" &&
                                    <div className="transaction-state" >
                                        {transaction[0].state}
                                    </div>
                                }
                                {
                                    transaction[0].state === "confirmada" &&
                                    <div style={{ color: "white", backgroundColor: "green" }} className="transaction-state" >
                                        {transaction[0].state}
                                    </div>
                                }
                                {
                                    transaction[0].state === "cancelada" &&
                                    <div style={{ color: "white", backgroundColor: "red" }} className="transaction-state" >
                                        {transaction[0].state}
                                    </div>
                                }
                            </div>
                            <div className="transaction-buttons" >
                                <div>
                                    <a href="">Ver detalle</a>
                                </div>
                                {
                                    transaction.map(cart => {
                                        if (cart.state) {
                                            if (cart.state === "en proceso") {
                                                return (
                                                    <div>
                                                        <Button variant="success">Confirmar</Button>
                                                        <Button variant="danger">Cancelar</Button>
                                                    </div>
                                                )
                                            }
                                        }
                                    })

                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}