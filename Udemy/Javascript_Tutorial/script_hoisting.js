// HOISTING


calcAge (1965);

function calcAge(year) {
    console.log(2016 - year);
}

calcAge(1990);

// FUNCTION EXPRESSION

// having this here it won't work
// retirement(1999);

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// will only work here
retirement(1990);

// Variables

console.log(age); // this will be undefined but age will be created
var age = 23;
console.log(age); //this will be define age as 23 having after the variable is declared

function foo(){
    console.log(age); //this will be undefined
    var age = 65;
    console.log(age); //this will print 65 because 65 is declared in function
}
foo();
console.log(age); //this will print 23 because 23 is declared in variable global above

