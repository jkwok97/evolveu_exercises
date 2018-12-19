//LinkedListComp.js FILE

import React, { Component } from 'react';
import ct from "./community";
import community from './community';

class CommunityComp extends Component {

    constructor() {
        super()
        this.counter = 0;
        this.state = {
          newCommunity: null,
        }
      }

    newCommunity = (event) => {
        let name = document.getElementById('text-new-name').value;
        let age = document.getElementById('text-new-age').value;
        let dollars = document.getElementById('text-new-dollars').value;
        let community = new ct.Community(name, age, dollars);
        this.setState({ newCommunity: community });
        
    }

    addPerson = () => {
        let name = document.getElementById('text-new-name').value;
        let age = document.getElementById('text-new-age').value;
        let dollars = document.getElementById('text-new-dollars').value;
        this.state.newCommunity.addPerson(name, age, dollars);
        document.getElementById("show-people").innerHTML = `${this.state.newCommunity.show()}`;
    }

    showCommunity = () => {
        document.getElementById("show-people").innerHTML = `${this.state.newCommunity.show()}`;
    }

    happyBirthday = () => {
        this.state.newCommunity.birthday();
        document.getElementById("show-age").innerHTML = `${this.state.newCommunity.sumAge()}`
        document.getElementById("show-people").innerHTML = `${this.state.newCommunity.show()}`;
    }

    calcAge = () => {
        document.getElementById("show-age").innerHTML = `${this.state.newCommunity.sumAge()}`;
    }

    onPassedFunction = () => {
        console.log('we are in the app function');
    }

    render() {
        return (
            <div className="community">
                <h1 className="animated rotateIn">Community!</h1>
                <div className="addCommunity animated zoomIn">
                    <button id="new-community" onClick={this.newCommunity}>New Community</button>
                    <button id="add-node" onClick={this.addPerson}>Add Person</button><br /><br />
                    <button id="add-node" onClick={this.happyBirthday}>Happy Birthday!</button><br /><br />
                    Name: <input type="text" id="text-new-name" /><br /><br />
                    Age: <input type="text" id="text-new-age" /><br /><br />
                    Dollars: <input type="text" id="text-new-dollars" /><br /><br />
                    <button id="show-all" onClick={this.showCommunity}>Show All</button><br /><br />
                </div>
                <div className = "show-all" id="show-people"></div>
                <div className = "calculate-age  animated zoomIn">
                    <button id="new-community" onClick={this.calcAge}>Calculate Total Age</button>   
                </div>
                <div className = "show-age" id="show-age"></div>
            </div>
        )
    }
}

export default CommunityComp;