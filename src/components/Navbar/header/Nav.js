import React, { Component } from "react";
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom';

export class Nav extends Component {
  state = {
    toggle: false,
  };
  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    const { toggle } = this.state;
    return (
      <>
        <ul className={toggle ? "toggle" : ""} style={{ paddingLeft: "0px" }}>
          <li>
            <NavLink exact activeStyle={{color: 'yellow'}} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{color: 'yellow'}} to="/browse">Browse</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{color: 'yellow'}} to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{color: 'yellow'}} to="/login">Login</NavLink>
          </li>
          <li className="close" onClick={this.menuToggle}>
            X
          </li>
        </ul>
        <div className="menu" onClick={this.menuToggle}>
          Menu
        </div>
      </>
    );
  }
}

export default Nav;
