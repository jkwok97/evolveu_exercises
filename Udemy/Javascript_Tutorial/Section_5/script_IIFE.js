// LECTURE IIFE ** THIS IS FOR DATA PRIVACY ** 

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// better way than above

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

