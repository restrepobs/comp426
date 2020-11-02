import React, { Component } from "react";
import { Favorites, Home, Profile } from "../../pages";
import { Route } from "react-router-dom";

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/favorites" component={Favorites} />
        <Route path="/profile" component={Profile} />
      </section>
    );
  }
}

export default Section;
