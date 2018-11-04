// CREATING OBJECTS

var personProto = {
    calcAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create (personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: {value: 'designer'}
});

