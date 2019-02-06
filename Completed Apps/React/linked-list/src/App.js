import React, { Component } from 'react';
import logo from './logo.svg';
import home from './_ionicons_svg_ios-bed.svg'
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
          <LinkedListComp className="linklistcomp" name="Top" func={this.onPassedFunction}/>
        </div>
    } else if (this.state.compToShow === 'community') {
      toShow = 
        <CommunityComp name="Top" func={this.onPassedFunction}/>
    } else {
      toShow = 
        <div>
          <div> 
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="animated zoomIn delay-0.5s">I'm a REACT app!</h1>
            </header>
          </div>
        </div>
    };

    return (
      <div className="App">
        {/* <h1>Hello World!</h1> */}
        <img src={home} className="lfs-logo" name="home" onClick={this.onIcon} alt="logo" />
        <img src={link} className="lfs-logo"  name="linked-list" onClick={this.onIcon} alt="logo" />
        <img src={people} className="lfs-logo"  name="community" onClick={this.onIcon} alt="logo" />
        <div> {toShow} </div>
      </div>
    );
  }
}

export default App;
