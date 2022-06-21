import React from "react";
import { login } from "../services/firebase";

function Login() {
  return (
    <div className="login-page">
      <div className="login-content">
        <div className="logo">
            <img src="https://github.com/peterkimm/applied_frontend/blob/master/src/images/applied-logo.png?raw=true"/>
        </div>
        <button className="btn btn-dark btn-lg btn-block" onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
