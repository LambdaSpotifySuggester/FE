import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp.js";
import Login from "./components/Login/Login.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
