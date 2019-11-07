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
    <div className="form-group">
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="form-control"
        onChange={props.handleNameInput}
      />
      </div>
      <div className="form-group">
      <label>Email</label>
      <input
        type="text"
        name="email"
        className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp"
        placeholder="Email"
        onChange={props.handleEmailInput}
      />
      </div>
      <div className="form-group">
      <label>Password</label>
      <input
        type="password"
        name="password"
        className="form-control"
        placeholder="Password"
        onChange={props.handlePasswordInput}
      />
      </div>
      <Button className="btn btn-primary center-block" type="submit" onClick={handleClose}>Register</Button>
    </form>
    </Modal.Body>
    </Modal>
    </div>
  );
}
