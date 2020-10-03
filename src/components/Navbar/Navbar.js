import React, { Component } from "react";
import "./Navbar.css";
import Header from "./header/Header.js";
import Section from "./Section.js";
import { BrowserRouter as Router } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Section />
        </div>
      </Router>
    );
  }
}
