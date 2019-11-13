import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalChooseCart({show, handleShow, handleClose, handleCartSelection}) {
    return(
    <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Que quiere hacer con su carrito anterior?</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Ejemplo.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={()=>handleCartSelection('Merge')}>Merge</Button>
    <Button variant="primary" onClick={()=>handleCartSelection('Replace')}>Replace</Button>
    <Button variant="primary">Keep Original Cart</Button>
  </Modal.Footer>
</Modal>)

}
