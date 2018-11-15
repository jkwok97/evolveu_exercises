//LinkedListComp.js FILE

import React, { Component } from 'react';
import jk from './linkList';

class LinkedListComp extends Component {
    onNew(event) {
        // console.log("clicked", event);
        let input = document.getElementById('textInput').value;
        console.log('Value', input);
        let secondInput = new jk.LinkList(input);
        console.log('LinkedList', secondInput.show());
        secondInput.add('second');
        console.log('LinkedList2', secondInput.show());
        
    }

    render() {
        return (
            <div className="linklist">
                <h2>Hello World!</h2>
                <div className="addlinklist">
                    <button id="newlinklist" onClick={this.onNew}>New Button</button><br /><br />
                    New Node: <input type="text" id="textInput" /><br />
                </div>
            </div>
        )
    }
}

export default LinkedListComp;