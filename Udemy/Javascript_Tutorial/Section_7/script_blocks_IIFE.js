// BLOCKS AND IIFE IN ES6

{
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a + b); WILL NOT WORK BECAUSE CONST AND LET ARE NOT ACCESSIBLE OUTSIDE BLOCK
console.log(c);


// ES5

(function() {
    var c = 3;
})

// console.log(c);  WILL NOT WORK BECAUSE ITS OUTSIDE THE IFFE