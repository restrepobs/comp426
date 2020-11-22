import React, { Component } from "react";
import Card from "../components/Card";


export class Profile extends Component {

  componentDidMount() {
    fetch('/api').then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <Card/>
      </div>
    );
  }
}

export default Profile;
