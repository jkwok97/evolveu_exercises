// Operator Precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;


// Mupltiple Operators

var isFullAge = now - yearJohn >= fullAge; //operator precedence javascript lookup
console.log(isFullAge);

// Grouping

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments

var x,y;
x = y = (3 + 5) * 4 - 6;
console.log(x,y);

// More Operators

// x = x * 2;
// x *= 2; these are the same

// x = x + 1;
// x += 1;
// x++;  these are all the same