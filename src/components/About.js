import React, { Component } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import "../App.css";

export default class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            learn react
          </a>
          <Link to="/">now go to homepage</Link>
        </header>
      </div>
    );
  }
}
