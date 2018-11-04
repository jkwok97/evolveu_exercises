// ARRAYS

var names = ['john', 'jane', 'mark'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names[2]);
console.log(names.length);

// MUTATE ARRAY DATA
names[2] = 'Ben';
console.log(names[2]);

names[5] = 'Mary';
console.log(names);
console.log(names.length);

// DIFFERENT DATA TYPES

var john = ['John', 'Smith', 1990, 'teacher', false];
console.log(john);

john.unshift('Mr');
john.push('blue');
console.log(john);

john.pop();
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);