import LinkedListComp from "./LinkedListComp";

class Node {
    constructor(subject, amount) {
        this.subject = subject;
        this.amount = amount;
        this.forwardNode = null;
    }
}

class LinkedList {
    constructor(subject, amount) {
        this.x = new Node(subject, amount, null);
    }

    add(subject, amount) {
        let y = this.x;
        while (y.forwardNode != null) {
            y = y.forwardNode
        }
        y.forwardNode = new Node(subject, amount);
        return (y);
    } 

    show(value) {
        let y = this.x;
        let z = `${y.subject} ${y.amount}`;
        while (y.forwardNode) {
            z += ` ${y.forwardNode.subject} ${y.forwardNode.amount}`;
            y = y.forwardNode;
        }
        return (z);
    } 
}

export default { LinkedList };