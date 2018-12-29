import React, { Component } from 'react';
import logo from './profilePic.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {"Welcome to Brad Newman's Portfolio"}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created With React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
