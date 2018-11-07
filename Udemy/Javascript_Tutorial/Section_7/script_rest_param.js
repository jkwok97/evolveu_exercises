// REST PARAMETERS

// // ES5

// function isFullAge5(){
//     console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function(cur) {
//         console.log((2016 - cur) >= 18);
//     });
// }

// isFullAge5(1990,1999,1965);
// isFullAge5(1990,1999,1965,2016,1987);

// // ES6

// function isFullAge6(...years) {
//     console.log(years);
//     years.forEach(cur => console.log((new Date().getFullYear() - cur) >= 18));
// }

// isFullAge6(1990,1999,1965);
// isFullAge6(1990,1999,1965,2016,1987);

// ES5

function isFullAge5(limit){
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
        console.log((new Date().getFullYear() - cur) >= limit);
    });
}

isFullAge5(21,1990,1999,1965);
isFullAge5(1990,1999,1965,2016,1987);

// ES6

function isFullAge6(limit, ...years) {
    console.log(years);
    years.forEach(cur => console.log((new Date().getFullYear() - cur) >= limit));
}

isFullAge6(21,1990,1999,1965);
isFullAge6(18,1990,1999,1965,2016,1987);
