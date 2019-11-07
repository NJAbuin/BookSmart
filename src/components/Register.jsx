import React from "react";

export default function Register(props) {
  return (
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
  );
}
