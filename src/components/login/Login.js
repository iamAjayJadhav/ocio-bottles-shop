import React, { useState } from "react";
import "../login/Login.css";
import { auth } from "../../firebase.js";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <h1>OCIO</h1>
      <div className="login__box">
        <form>
          <h2>Email</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h2>Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={SignIn} className="login__box__button">
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
