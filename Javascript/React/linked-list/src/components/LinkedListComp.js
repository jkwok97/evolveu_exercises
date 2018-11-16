//LinkedListComp.js FILE

import React, { Component } from 'react';
import jk from "./linkedlist";

class LinkedListComp extends Component {

    newLinkList(event) {
        let subject = document.getElementById('text-new-subject').value;
        let amount = document.getElementById('text-new-amount').value;
        let newNode = new jk.LinkedList(subject, amount);
        // newNode.add();
        console.log(newNode);
        let div = document.createElement("div");
        document.getElementById("all").appendChild(div);
        div.innerHTML = `${newNode.show()}`;
    }

    // addNode() {
    //     newNode.add();
    //     document.getElementById("all").appendChild(div);
    //     div.innerHTML = `${newNode.show()}`;
    // }

    showLinkList(linkList) {
        
    }

    render() {
        return (
            <div className="linklist">
                <h2>Hello World!</h2>
                <div className="addlinklist">
                    <button id="new-linklist" onClick={this.newLinkList}>New Linked List</button>
                    <button id="add-node" onClick={this.addNode}>Add Node</button><br /><br />
                    Subject: <input type="text" id="text-new-subject" />
                    Amount: <input type="text" id="text-new-amount" /><br /><br />
                    <button id="show-all" onClick={this.showLinkList}>Show All</button><br /><br />
                </div>
                <div className = "show-all" id="all">
                </div>
            </div>
        )
    }
}

export default LinkedListComp;