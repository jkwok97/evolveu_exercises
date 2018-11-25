import React, { Component } from 'react';
import logo from './logo.svg';
import link from './_ionicons_svg_md-link.svg';
import people from './_ionicons_svg_md-contacts.svg';
import './App.css';
import LinkedListComp from './components/LinkedListComp';
import CommunityComp from './components/CommunityComp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      compToShow: 'logo',
    }
  }

  onIcon = (e) => {
    console.log(e.currentTarget.name);
    this.setState({
      compToShow: e.currentTarget.name,
    })
  }

  render() {
    let toShow;
    if (this.state.compToShow === 'linked-list') {
      toShow = 
        <div> 
          <LinkedListComp name="Top" func={this.onPassedFunction}/>
        </div>
    } else if (this.state.compToShow === 'community') {
      toShow =
        <div> 
        <CommunityComp name="Top" func={this.onPassedFunction}/>
        </div>
    } else {
      toShow = 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    };

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <img src={logo} className="lfs-logo" name="logo" onClick={this.onIcon} alt="logo" />
        <img src={link} className="lfs-logo" name="linked-list" onClick={this.onIcon} alt="logo" />
        <img src={people} className="lfs-logo" name="community" onClick={this.onIcon} alt="logo" />
        <div> {toShow} </div>
      </div>
    );
  }
}

export default App;
