import React, { Component } from "react";
// import css from estilos.css
import "./App.css";
const ruta = "https://api.github.com/users/";
const user = "dimasmendoza";
class App extends Component {
  state = {
    data: [],
  };
  peticion = () => {
    fetch(ruta + user + "/repos")
      .then((res1) => res1.json())
      .then((json1) => {
        this.setState({ data: json1 });
      });
  };
  componentDidMount() {
    this.peticion();
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {/* <h2>It is {this.peticion()}.</h2> */}
      </div>
    );
  }
}

export default App;
