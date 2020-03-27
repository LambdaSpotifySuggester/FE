import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  function onInputChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <section className="signup">
      <div className="container">
        <h2 className="song-suggester-signup-h2">Create An Account</h2>
        <form className="song-suggester-signup">
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
          <button>Sign Up</button>
        </form>
        <Link></Link>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="login-account-link">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}

export default SignUp;
