import React from "react";
import axios from "axios";
import Login from "../components/Login";
import { connect } from "react-redux";
import { receiveUser, emptyUser } from "../store/actions/user";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: "",
      passwordInput: "",
      error: false
    };
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleEmailInput(evt) {
    this.setState({ emailInput: evt.target.value });
  }

  handlePasswordInput(evt) {
    this.setState({ passwordInput: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.emailInput && this.state.passwordInput) {
      axios
        .post("/api/auth/login", {
          email: this.state.emailInput,
          password: this.state.passwordInput
        })
        .then(res => {
          return res.data;
        })

        .then(user => {
          this.props.receiveUser(user);
        })
        .then(() => this.setState({ error: false }))
        .catch(() => {
          this.setState({ error: true });
        });
    }
  }

  handleLogout() {
    axios.get("/api/auth/logout").then(() => this.props.emptyUser());
  }

  render() {
    const username = this.props.user.name || "";
    const userLogged = this.props.user == "";
    const name = username.split(" ")[0];
    const displayError = () => {
      alert("Credenciales Incorrectas");
      this.setState({ error: false });
    };
    return (
      <div>
        {userLogged == true ? (
          <Login
            handleSubmit={this.handleSubmit}
            handleEmailInput={this.handleEmailInput}
            handlePasswordInput={this.handlePasswordInput}
            handleLogout={this.handleLogout}
            handleError={this.state.error}
          />
        ) : (
          <ul
            className="nav"
            style={{
              color: "white",
              justifyItems: "center",
              alignItems: "center"
            }}
          >
            <li
              className="nav-item"
              style={{ marginTop: "7px", marginRight: "10px" }}
            >
              Hola {name} &nbsp; |
            </li>
            <li
              className="nav-item"
              onClick={this.handleLogout}
              style={{ marginTop: "7px" }}
            >
              Logout
            </li>
          </ul>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  receiveUser,
  emptyUser
};

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
