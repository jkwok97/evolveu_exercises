// FUNCTION STATEMENT AND EXPRESSIONS

// FUNCTION DECLARATION
// function whatDoYouDo(jobn, firstName) {   
// }

// FUNCTION EXPRESSION
var whatDoYouDo = function (job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName  + ' drives an Uber in Lisbon';
        case 'designer':
            return firstName + ' makes beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

// FUNCTION EXPRESSIONS PRODUCE AN OUTPUT , STATEMENTS DO NOT