// THIS VARIABLE

console.log(this);

// calcAge (1985);

// function calcAge(year) {
//     console.log(2018 - year);
//     console.log(this); // this refers to global object "window"
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);

        function innerFunction() {
            console.log(this); // this refers to global ovject "window" because its inside a function and not a method
        }
        innerFunction();
    }
}

john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calcAge = john.calcAge;
mike.calcAge();
