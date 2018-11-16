

class Node extends Object {
    constructor(value) {
        super();
        this.value = value;
        this.nextNode = null;
    }
}

function getMyLL() {
    let head = new Node('First');
    head.nextNode = new Node('Second');
    head.nextNode.nextNode = new Node('Third');
    head.nextNode.nextNode.nextNode = new Node('Fourth');

    return head;
}

export default { getMyLL, Node };