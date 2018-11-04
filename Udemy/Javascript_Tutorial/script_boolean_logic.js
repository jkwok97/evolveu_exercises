// BOOLEAN LOGIC

var firstName = prompt('Hello! What is your name?');
var age = prompt("How old are you?");

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else {
    console.log(firstName + ' is a man');
}