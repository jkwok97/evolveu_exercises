// MAPS

// ES5




// ES6 SET AND GET

const question = new Map();
question.set('question', 'What is the official name of the latest major Javascript version?');
question.set(1, 'ES5');
question.set(2, "ES6");
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer');
question.set(false, 'wrong, please try again');

console.log(question.get('question'));
// console.log(question.size);

if (question.has(4)){
    // question.delete(4);

    // console.log('Answer 4 is here');
}

// question.clear();

// LOOPING THRU THE MAP

// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    // console.log(`This is ${key}, and it's set to ${value}`);
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('What is your answer?'));

console.log(question.get(ans === question.get('correct')));

// ADVANTAGES FOR MAPS OVER OBJECTS TO BUILD HASH MAPS
// maps can use anything as keys
// maps are itterable
// maps are easy to get size of the map
// maps are easy to add and delete
