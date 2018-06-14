import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import EmployeeDetails from "./components/EmployeeDetails";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
    
        <EmployeeDetails/>
       

 
        
      </div>
    );
  }
}

export default App;
