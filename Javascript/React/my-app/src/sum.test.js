import jk from './sum';

// const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    console.log(jk + "hi jeff");
    expect(jk.sum(1, 2)).toBe(3);
});

test('adds 1 + 2 + 1 to equal 4', () => {
    console.log(jk + "hello");
    expect(jk.add(1, 2)).toBe(4);
});

test('should print boom', () => {
    let x = new jk.LinkList();
    expect(x.play("boom!")).toBe("boom!");
})