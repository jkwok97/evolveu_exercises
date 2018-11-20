import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedListComp from './components/LinkedListComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Linked List</h1>
        <LinkedListComp name="Top" func={this.onPassedFunction} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
      </div>
    );
  }
}

export default App;
