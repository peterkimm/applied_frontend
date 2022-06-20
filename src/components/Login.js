import React from "react";
import { login, logout } from "../services/firebase";

function Login() {
  return (
    <div className="login-page">
      <div className="login-content">
        <h1 className="login-image">APPLIED LOGO HERE</h1>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
