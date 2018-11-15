import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import LinkedList from './components/linkList';
import LinkedListComp from './components/LinkedListComp';

class App extends Component {
  // constructor() {
  //   super();
  //   this.head = new LinkedList("hi");
  // }

  addNode(event) {
    let input = document.getElementById('input');
    console.log(input.value);
    // LinkedList.add(input.value);
    // console.log(x);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="addlinklist">
            New Node: <input type="text" id="input" /><br />
            <button id="newlinklist" onClick={this.addNode}>Add New</button>
          </div>
        </header>
        <h1>This is my new beginning</h1>
        <LinkedListComp/>
      </div>
    );
  }
}

export default App;
