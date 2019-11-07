import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export default function Register(props) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  
  return (<div>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <form onSubmit={props.handleSubmit} method="post">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={props.handleNameInput}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={props.handleEmailInput}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={props.handlePasswordInput}
      />
      <button type="submit">Registrate!</button>
    </form>
    </Modal.Body>
    </Modal>
    </div>
  );
}
