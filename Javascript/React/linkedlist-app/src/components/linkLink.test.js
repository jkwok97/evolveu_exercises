import jk from './linkList';

let x = new jk.LinkList();

test('should print boom', () => {
    expect(x.play("boom!")).toBe("boom!");
})

// test('should print nothing', () => {
//     expect(x.show('first')).toBe('first');
// })

test('Test2', () => {
    let head = new jk.LinkList('First');
    expect(head.show()).toBe('First');

    let head1 = new jk.LinkList('Second');
    expect(head1.show()).toBe('Second');
    
    let x = new jk.LinkList('First');
    expect(x.show()).toBe('First');
    x.add('Second');
    expect(x.show()).toBe('First, Second');
    x.add('Third');
    expect(x.show()).toBe('First, Second, Third');
})