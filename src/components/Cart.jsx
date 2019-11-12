import React from "react";
import Button from 'react-bootstrap/Button'


function Cart() {
    return (
        <div>
            <div className="cart" >
                <img src="https://image.flaticon.com/icons/png/512/107/107831.png" style={{ width: "40px", display: "inline-block" }} alt="" /> &nbsp;&nbsp;&nbsp;
            <h1 style={{ display: "inline-block", margin: "0 0 0 0" }} >Mi Carrito</h1>
            </div>
            <div className="cart-container" >
                <div className="cart-container-products" >
                    <div className="cart-container-products-titles" >
                        <h3>Producto</h3>
                        <h3>Cantidad</h3>
                        <h3>Total</h3>
                    </div>
                    <div className="cart-container-products-list" >
                        <img src="https://images.bajalibros.com/JKMS-PdecpKBMlFoom9stu5KiQ4=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1112016_294e81a3a4fe80d2d944056f45c6824945a34a06.jpg" style={{ width: "75px" }} alt="" />
                        <p>Nombre del Producto</p>
                        <div>
                            <Button variant="outline-info">-</Button>
                            <input style={{ width: "30px", textAlign: "center" }} type="text" value="1" name="" id="" />
                            <Button variant="outline-info">+</Button>
                        </div>
                        <div className="product-price" >$1233,99</div>
                        <Button variant="danger" >Delete</Button>
                    </div>
                    <div className="cart-container-products-list" >
                        <img src="https://images.bajalibros.com/hMxN8O3YzT33y0sQzWdjk52Kjgk=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1112519_344472d771c2b7dbed7f9c864a82f943dd5ebbe2.jpg" style={{ width: "75px" }} alt="" />
                        <p>Nombre del Producto</p>
                        <div>
                            <Button variant="outline-info">-</Button>
                            <input style={{ width: "30px", textAlign: "center" }} type="text" value="1" name="" id="" />
                            <Button variant="outline-info">+</Button>
                        </div>
                        <div className="product-price" >$1233,99</div>
                        <Button variant="danger" >Delete</Button>
                    </div>
                    <div className="cart-container-products-list" >
                        <img src="https://images.bajalibros.com/hpSAn5EPsAus1A_KlKw4v9DOyzs=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1098153_e118dd016a949356434bb9685c663a8131585900.jpg" style={{ width: "75px" }} alt="" />
                        <p>Nombre del Producto</p>
                        <div>
                            <Button variant="outline-info">-</Button>
                            <input style={{ width: "30px", textAlign: "center" }} type="text" value="1" name="" id="" />
                            <Button variant="outline-info">+</Button>
                        </div>
                        <div className="product-price" >$1233,99</div>
                        <Button variant="danger" >Delete</Button>
                    </div>
                </div>
                <div className="cart-container-total" >
                    <div className="cart-container-total-count" >
                        <p>TOTAL:</p>
                        <p  >$1.234,99</p>
                    </div>
                    <Button variant="success" className="button-finish-style" >Finalizar Compra</Button>

                </div>
            </div>
        </div>
    );
}

export default Cart;


