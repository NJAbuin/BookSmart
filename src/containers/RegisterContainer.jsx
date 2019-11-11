import React from "react";
import axios from "axios";
import Register from "../components/Register";

export default class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: "",
      passwordInput: "",
      nameInput: ""
    };
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailInput(evt) {
    this.setState({ emailInput: evt.target.value });
  }

  handlePasswordInput(evt) {
    this.setState({ passwordInput: evt.target.value });
  }

  handleNameInput(evt) {
    this.setState({ nameInput: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("Hola");
    if (
      this.state.emailInput &&
      this.state.passwordInput &&
      this.state.nameInput
    ) {
      axios.post("/api/auth/register", {
        name: this.state.nameInput,
        email: this.state.emailInput,
        password: this.state.passwordInput
      });
    }
  }

  render() {
    return (
      <Register
        handleSubmit={this.handleSubmit}
        handleEmailInput={this.handleEmailInput}
        handleNameInput={this.handleNameInput}
        handlePasswordInput={this.handlePasswordInput}
      />
    );
  }
}
