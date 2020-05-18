import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>this is your about page okay ?</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            learn react
          </a>
          <Link to="/">homepage</Link>
        </header>
      </div>
    );
  }
}
