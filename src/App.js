import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
class App extends Component {
  render() {
    return (
      <div className="App">
        <p> LAB02.1</p>
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Lab React</NavbarBrand>
            </div>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default App;
