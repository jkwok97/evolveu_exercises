// linkedlist.test.js

import jk from "./linkedlist";

test ('Hello World', () => {
    console.log("hello world")

    let x = new jk.LinkedList('First', '10.00');
    expect(x.show()).toBe('First 10.00');
    
    x = new jk.LinkedList('Tenth', '100.00');
    expect(x.show()).toBe('Tenth 100.00');

    x.add('Second', '20.00');
    expect(x.show()).toBe('Tenth 100.00 Second 20.00');
});

