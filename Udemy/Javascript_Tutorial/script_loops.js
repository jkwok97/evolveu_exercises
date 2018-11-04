// LOOPS AND ITERATION

// FOR LOOPS

for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// WHILE LOOP

var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}

// CONTINUE AND BREAK STATEMENTS

var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// LOOPING BACKWARDS

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}