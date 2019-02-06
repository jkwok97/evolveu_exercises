import ct from "./community"

test ('Hello World', () => {

    let p = new ct.Community ('Janson', 2, 500);
    expect(p.show()).toBe(`Janson, 2, 500`);

    p.birthday();
    expect(p.show()).toBe(`Janson, 3, 500`);
    
    let bff = p;
    bff.birthday();
    expect(bff.show()).toBe('Janson, 4, 500');
    expect(p.show()).toBe('Janson, 4, 500');

    let community = new ct.Community

    expect(newPerson.addPerson('Joe', 25, 775)).toEqual({"age": 25, "dollars": 775, "name": "Joe"});
    expect(newPerson.addPerson('Frank', 35, 1000)).toEqual({"age": 35, "dollars": 1000, "name": "Frank"});
    expect(newPerson.addPerson('Tim', 29, 250)).toEqual({"age": 29, "dollars": 250, "name": "Tim"});

    expect(newPerson.showArray()).toEqual("Name: Joe, Age: 25, Dollars: 775 | Name: Frank, Age: 35, Dollars: 1000 | Name: Tim, Age: 29, Dollars: 250 | ");

    expect(newPerson.sumAge()).toBe(89);

    console.log(newPerson.peopleArray[0].age);
    newPerson.birthday();
    console.log(newPerson.newPerson);

    expect(newPerson.addPerson('Jeff', 39, 1500)).toEqual({"age": 39, "dollars": 1500, "name": "Jeff"});
    expect(newPerson.addPerson('Larry', 45, 2500)).toEqual({"age": 45, "dollars": 2500, "name": "Larry"});

    




        
        
    




});