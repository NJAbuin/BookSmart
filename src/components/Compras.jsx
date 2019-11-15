import React from "react";
import Button from "react-bootstrap/Button";

export default function Compras(props) {
  console.log(props);

  const totalValue = function(cart) {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
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
      {props.transaction.map(transaction => {
        return (
          <div
            key={transaction.indexOf(transaction)}
            className="compras-container"
          >
            <div className="transaction-container">
              <div className="transaction-name">
                {transaction.map(product => {
                  if (product.name) {
                    return (
                      <div key={product.id} className="transaction-details">
                        <p style={{ marginBottom: "0", fontWeight: "bold" }}>
                          {product.name}{" "}
                        </p>
                        <p style={{ marginBottom: "0" }}>
                          {" "}
                          ${product.price} x {product.quantity}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="transaction-total-state">
                <div className="transaction-total">
                  Total: $ {totalValue(transaction)}
                </div>
                <div className="transaction-state">
                  <p>En proceso</p>
                </div>

                {/* {
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
                                } */}
              </div>
              <div className="transaction-buttons">
                <div></div>
                Fecha: {transaction[0].createdAt.slice(0, 16)}
                {/* {
                                    transaction.map(cart => {
                                        // if (cart.state) {
                                        //     if (cart.state === "en proceso") {
                                        return (
                                            <div>
                                                <Button variant="success">Confirmar</Button>
                                                <Button variant="danger">Cancelar</Button>
                                            </div>
                                        )
                                        //         }
                                        //     }
                                    })

                                } */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
