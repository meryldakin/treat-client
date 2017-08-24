import React, { Component } from "react";
import Home from "./Components/Home.js";
import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
