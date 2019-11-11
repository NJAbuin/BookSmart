import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleSubmit} method="post">
            <div className="form-group">
              <label forhtml="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={props.handleEmailInput}
              />
            </div>

            <div className="form-group">
              <label forhtml="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={props.handlePasswordInput}
              />
            </div>
            {props.handleError == true ? (
              <div className="alert alert-danger" role="alert">
                <strong>Error:</strong> Credenciales Incorrectas
              </div>
            ) : (
              <div></div>
            )}
            <Button
              type="primary"
              onClick={() => {
                if (props.handleError == false) {
                  handleClose;
                }
              }}
            >
              Login
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
