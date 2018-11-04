// TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS

// falsy values: undefined, null, 0, '', NaN
// truthy values: not falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}

// EQUALITY OPERATOR

if (height == '23') {
    console.log('The == operator does type coercion!');
} 