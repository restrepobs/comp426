import React from "react";
import "./App.css";
import { Home } from "./pages/Home.js";
import { Navbar } from "./components/Navbar/Navbar.js";

function App() {
  fetch("http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3", {
    mode: 'no-cors',
  })
  

  .then(response => {
	  console.log(response);
  })
  .catch(err => {
	  console.log(err);
  });
  return <Navbar />;
}
export default App;
