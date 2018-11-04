// OBJECTS AND PROPERTIES

// OBJECT LITERAL

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// NEW OBJECT SYNTAX

var jane = new Object();
jane.name = 'Jane'
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

