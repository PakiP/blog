import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section className="banner"></section>
          <h1>WELCOME</h1>
          <a
            className="App-link"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            to Google
          </a>
        </header>
      </div>
    );
  }
}

export default App;
