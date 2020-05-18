import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>this is your about page okay ?</p>
          <Link to="/">
            <button>Homepage</button>
          </Link>
        </header>
      </div>
    );
  }
}
