//LinkedListComp.js FILE

import React, { Component } from 'react';
import jk from "./linkedlist";

class LinkedListComp extends Component {

    constructor() {
        super()
        this.counter = 0;
        this.state = {
          newNode: null,
        }
      }

    newLinkList = (event) => {
        let subject = document.getElementById('text-new-subject').value;
        let amount = document.getElementById('text-new-amount').value;
        let newNode = new jk.LinkedList(subject, amount);
        this.setState({ newNode: newNode });
        
    }

    addNode = () => {
        let subject = document.getElementById('text-new-subject').value;
        let amount = document.getElementById('text-new-amount').value;
        this.state.newNode.add(subject, amount);
    }

    showLinkList = () => {
        document.getElementById("all").innerHTML = `${this.state.newNode.show()}`;
    }

    showFirst = () => {
        document.getElementById("all").innerHTML = `${this.state.newNode.getFirst()}`; 
    }

    showNext = () => {
        document.getElementById("all").innerHTML = `${this.state.newNode.getNext()}`;
    }

    showPrev = () => {
        document.getElementById("all").innerHTML = `${this.state.newNode.getPrev()}`;
    }

    showLast = () => {
        document.getElementById("all").innerHTML = `${this.state.newNode.getLast()}`;
    }

    insertNode = () => {
        let subject = document.getElementById('text-new-subject').value;
        let amount = document.getElementById('text-new-amount').value;
        document.getElementById("all").innerHTML = `${this.state.newNode.insertNode(subject, amount)}`;
    }

    deleteNode = () => {
        this.state.newNode.deleteNode();
    }

    onPassedFunction = () => {
        console.log('we are in the app function');
    }

    render() {
        return (
            <div className="linklist">
                <h2>Linked Lists!</h2>
                <div className="addlinklist">
                    <button id="new-linklist" onClick={this.newLinkList}>New Linked List</button>
                    <button id="add-node" onClick={this.addNode}>Add Node</button>
                    <button id="insert-node" onClick={this.insertNode}>Insert Node</button>
                    <button id="delete-node" onClick={this.deleteNode}>Delete Node</button><br /><br />
                    Subject: <input type="text" id="text-new-subject" />
                    Amount: <input type="text" id="text-new-amount" /><br /><br />
                    <button id="show-all" onClick={this.showLinkList}>Show All</button><br /><br />
                    <button id="show-first" onClick={this.showFirst}>First</button>
                    <button id="show-next" onClick={this.showNext}>Next</button>
                    <button id="show-prev" onClick={this.showPrev}>Prev</button>
                    <button id="show-last" onClick={this.showLast}>Last</button>

                </div>
                <div className = "show-all" id="all"></div>
            </div>
        )
    }
}

export default LinkedListComp;