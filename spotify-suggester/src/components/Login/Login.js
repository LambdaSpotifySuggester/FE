import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  function onInputChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <section className="login">
      <div className="container">
        <h2 className="song-suggester-login-h2">Log In</h2>
        <form className="song-suggester-login">
          <input
            value={user.email}
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={onInputChange}
          />
          <input
            value={user.password}
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={onInputChange}
          />
          <button>Log In</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="create-account-link">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
