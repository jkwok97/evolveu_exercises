// CLOSURES

function retirement(retireAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retireAge - age) + a);
    }
}

var retireAgeUS = retirement(66);
retireAgeUS(1990); // this is the same as below

retirement(66)(1990); // this is same as above

// **************************************************

// MORE FUNCTIONS FOR ABOVE

var retireAgeGermany = retirement (65);
var retireAgeIceland = retirement (67);

retireAgeGermany(1990);
retireAgeUS (1990);
retireAgeIceland (1990);

// solution for interview

function interviewQuestion(job) {
    return function(name) {
        if (job == 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('john');
