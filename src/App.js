import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "antd-mobile";

class App extends Component {

  test = () => {
      console.log('支持ES6？');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.test}/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Button type="primary" disabled>primary disabled</Button>
      </div>
    );
  }
}

export default App;
