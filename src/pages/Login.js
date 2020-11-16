import React, { Component } from "react";

export class Login extends Component {
    render() {
        console.log("hiiiii")
      return (
          
          
        <div className = "Login">
            <br></br>
            <br></br>
            <br></br>
          <h1>Login</h1>
          <br></br>
          <form>
                <div>
                 <label for="username">Username</label>
                <input id="username" width="20" required></input>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input  id="password" required></input>
  </div>
  <button type="submit">Login</button>
</form>
        </div>
        
      )
    }
  }
  
  export default Login;
  