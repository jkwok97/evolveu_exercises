

var myModule = (function() {
    var myString = 'My Value';
    console.log("Hello World!")
    function myFunc() {
        console.log('I am in myFunc');
    }

    return {
        stuff : 'some stuff',
        myNum : 42,
        yourString : myString,
        yourFunc : myFunc
    };

})();

console.log(myModule);
myModule.yourFunc();
console.log(myModule.yourString);

function moveText() {
    var x = document.getElementById("text-area");
    document.getElementById("moved-text").innerHTML = x.value;
    x.value = '';
}


var playModule = function() {
    document.getElementById("json").onclick = screenPrint;
    document.getElementById("array").onclick = myArray;
    document.getElementById("object").onclick = myObject;
    
    var myArray = [1,2,3,4,5,6];
    var myObject = {
        firstName: 'John',
        lastName: 'Smith',
        birthYear: 1990,
        family: ['Jane', 'Mark', 'Bob', 'Emily'],
        job: 'teacher',
        isMarried: false
    }

    function myArray() {
        for (var i = 0; i < myArray.length; i++)
           document.getElementById("left-array").innerHTML += "<tr><td>" + myArray[i] + "</td></tr>";
    }
    
    // function myObject() {
    //     Object.keys(myObject).forEach(function(key) {
    //     console.log(key, myObject[key]);
    //         });
    // }

    // ALTERNATE LOOP FOR MYOBJECT
    function myObject() {
        for (i in myObject) {
            document.getElementById("right-object").innerHTML += "<tr><td>" + (i, myObject[i]) + "</td></tr>";
        }
    }

    function screenPrint() {
        console.log("this is Json");
    }
    return {
        
    }
}();

