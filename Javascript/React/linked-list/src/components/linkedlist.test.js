// linkedlist.test.js

import jk from "./linkedlist";

test ('Hello World', () => {
    console.log("hello world")

    let x = new jk.LinkedList('test', '10.00');
    expect(x.show()).toBe('test 10.00');
    
    x = new jk.LinkedList('First', '10.00');
    expect(x.show()).toBe('First 10.00');

    x.add('Second', '20.00');
    expect(x.show()).toBe('First 10.00 Second 20.00');
    x.add('Third', '30.00');
    expect(x.show()).toBe('First 10.00 Second 20.00 Third 30.00');
    x.add('Fourth', '40.00');
    expect(x.show()).toBe('First 10.00 Second 20.00 Third 30.00 Fourth 40.00');

    expect(x.getFirst()).toBe('First 10.00');

    expect(x.getNext()).toBe('Second 20.00');
    expect(x.getNext()).toBe('Third 30.00');
    expect(x.getNext()).toBe('Fourth 40.00');
    expect(x.getNext()).toBe('Fourth 40.00: is the last node');

    expect(x.getPrev()).toBe('Third 30.00');
    expect(x.getPrev()).toBe('Second 20.00');
    expect(x.getPrev()).toBe('First 10.00');
    expect(x.getPrev()).toBe('First 10.00: is the last node');

    expect(x.getLast()).toBe('Fourth 40.00');

    x.getPrev();
    x.getPrev();
    expect(x.insertNode('SecondHalf', '25.00')).toBe('SecondHalf 25.00')
    expect(x.show()).toBe('First 10.00 Second 20.00 SecondHalf 25.00 Third 30.00 Fourth 40.00')
    expect(x.getNext()).toBe('Third 30.00');
    expect(x.getPrev()).toBe('SecondHalf 25.00');
    expect(x.getPrev()).toBe('Second 20.00');
    expect(x.getPrev()).toBe('First 10.00');

    expect(x.getFirst()).toBe('First 10.00');
    expect(x.getNext()).toBe('Second 20.00');
    expect(x.getNext()).toBe('SecondHalf 25.00');
    expect(x.getNext()).toBe('Third 30.00');
    x.deleteNode();
    expect(x.show()).toBe('First 10.00 Second 20.00 SecondHalf 25.00 Fourth 40.00')

    expect(x.getFirst()).toBe('First 10.00');
    expect(x.getNext()).toBe('Second 20.00');
    expect(x.getNext()).toBe('SecondHalf 25.00');
    expect(x.getNext()).toBe('Fourth 40.00');

    expect(x.getPrev()).toBe('SecondHalf 25.00');
    expect(x.getPrev()).toBe('Second 20.00');
    expect(x.getPrev()).toBe('First 10.00');


});

