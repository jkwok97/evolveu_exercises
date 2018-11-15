class LinkList {
    constructor(first) {
        this.head = new Node(first, null);
    }

    play(str) {
        console.log(str);
        return str;
    }

    show(value) {
        let x = this.head;
        let y = this.head.value;
        while (x.next != null) {
            y += ', ' + x.next.value;
            x = x.next;
        }
        return y;
    }

    add(value) {
        let x = this.head;
        while (x.next != null) {
            x = x.next;
        }
        x.next = new Node(value, null);
    }   
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    };
}



export default { LinkList };