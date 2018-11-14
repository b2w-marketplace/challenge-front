import React, { Component } from "react";
import Home from "./views/Home.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
