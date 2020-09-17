import React, { Component } from 'react';
// import css from estilos.css
import './App.css';
const ruta = 'https://api.github.com/users/';
// const user = "dimasmendoza";
class App extends Component {
  state = {
    data: [],
    value: '',
    error: '',
  };
  peticion = () => {
    fetch(`${ruta + this.state.value}/repos`)
      .then((res1) => res1.json())
      .then((json1) => {
        if (json1.message === 'Not Found') {
          this.setState({ data: [], error: 'User not Found' });
        } else {
          this.setState({ data: json1, error: '' });
        }
      })
      .catch((error) => this.setState({ data: [], message: error }));
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.peticion();
  }

  componentDidMount() {
    // this.peticion();
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

          {this.state.error.length > 0 && (
            <p Style="color: red">
              <span>Error al traer el dato</span>
            </p>
          )}
        </form>
      </section>
    );
  }
}

export default App;
