// VARIABLE DECLARATIONS WITH LET AND CONST

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);  THIS WILL NOT WORK BECAUSE YOU CANT CHANGE A CONST VARIABLE

// ES5
function driversLicense5(passedTest) {
    if (passedTest) {
        console.log(firstName); // will be undefined because its not declared
        var firstName = 'John';
        var yearOfBirth = '1990';
        
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' can now drive.')
}

driversLicense5(true);

// var is accessible outside the block but inside the function

// ES6
function driversLicense6(passedTest) {
    // console.log(firstName); // will get error because its not declared
    let firstName;
    const yearOfBirth = 1990;
    if (passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' can now drive.')
}

driversLicense6(true);

// let and const are only available inside the block

let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);