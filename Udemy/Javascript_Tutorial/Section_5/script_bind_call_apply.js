// BIND, CALL, APPLY

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentleman! I am ' + this.name + ' and I am ' + this.age + ' years old');
        } else if (style == 'friendly') {
            console.log('Hey Whats up! I am ' + this.name + ' and I am ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// CALL METHOD
john.presentation.call(emily, 'friendly', 'afternoon');

// APPLY METHOD
// john.presentation.apply(emily, ['friendly', 'afternoon']);  THIS WONT WORK!!

// BIND METHOD
var johnFriendly = john.presentation.bind(emily, 'friendly');
johnFriendly('evening');


// ANOTHER EXAMPLE

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calcAge);

var fullJapan = arrayCalc (ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
