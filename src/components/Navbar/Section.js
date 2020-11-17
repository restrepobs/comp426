import React, { Component } from "react";
import { Browse, Home, Profile, Login } from "../../pages";
import { Route } from "react-router-dom";

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/browse" component={Browse} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </section>
    );
  }
}

export default Section;
