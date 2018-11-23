import ct from "./community"

test ('Hello World', () => {

    let p = new ct.People('Janson', 2, 500);
    expect(p.show()).toBe(`Janson, 2, 500`);

    p.birthday();
    expect(p.show()).toBe(`Janson, 3, 500`);
    
    let bff = p;
    bff.birthday();
    expect(bff.show()).toBe('Janson, 4, 500');
    expect(p.show()).toBe('Janson, 4, 500');

    let newPerson1 = new ct.People('Joe', 25, 775);
    let newPerson2 = new ct.People('Frank', 35, 1000);
    let newPerson3 = new ct.People('Tim', 29, 250);

    expect(newPerson1.addPerson('Joe', 25, 775)).toEqual([{"age": 25, "dollars": 775, "name": "Joe"}]);
    expect(newPerson2.addPerson('Frank', 35, 1000)).toEqual({"age": 35, "dollars": 1000, "name": "Frank"});
    expect(newPerson3.addPerson('Tim', 29, 250)).toEqual({"age": 29, "dollars": 250, "name": "Tim"});

    let sum = [newPerson1.age, newPerson2.age, newPerson3.age].reduce((a, b) => a + b, 0);
    console.log(sum);

    newPerson1.birthday();
    expect(newPerson1.show()).toBe('Joe, 26, 775');
    newPerson2.birthday();
    expect(newPerson2.show()).toBe('Frank, 36, 1000');
    newPerson3.birthday();
    expect(newPerson3.show()).toBe('Tim, 30, 250');

    let sum2 = [newPerson1.age, newPerson2.age, newPerson3.age].reduce((a, b) => a + b, 0);
    console.log(sum2);




        
        
    




});