import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
