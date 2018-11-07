// ARRAYS

const boxes = document.querySelectorAll('.box');

// ES5
var boxes5 = Array.prototype.slice.call(boxes);
boxes5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

// ES6

const boxes6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5

// for(var i = 0; i < boxes5.length; i++) {
//     if (boxes5[i].className === 'box blue') {
//         continue;
//     }
//     boxes5[i].textContent = 'I changed to blue!';
// }

// ES6 FOR/OF LOOP METHOD

for (const cur of boxes6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

// ES5

var ages = [12,17,8,21,14,11];
var full = ages.map(function(cur){
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6 FIND & FINDINDEX METHOD

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
