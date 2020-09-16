import React, { Component } from "react";
// import css from estilos.css
import "./App.css";
const ruta = "https://api.github.com/users/";
// const user = "dimasmendoza";
class App extends Component {
  state = {
    data: [],
    value: "",
  };
  peticion = () => {
    fetch(ruta + this.state.value + "/repos")
      .then((res1) => res1.json())
      .then((json1) => {
        this.setState({ data: json1 });
      });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.peticion();
  }
  render() {
    const { data } = this.state;
    const usr = (this.handleChange = this.handleChange.bind(this));
    this.handleSubmit = this.handleSubmit.bind(this);
    return (
      <section>
        <header className="header">
          <h1 className="header_Title">Proyectos GitHub</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

export default App;
