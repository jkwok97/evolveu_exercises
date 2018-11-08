
// CLASS EXAMPLE
// ---------------------------------------------------
// var myModule = (function() {
//     var myString = 'My Value';
//     console.log("Hello World!")
//     function myFunc() {
//         console.log('I am in myFunc');
//     }

//     return {
//         stuff : 'some stuff',
//         myNum : 42,
//         yourString : myString,
//         yourFunc : myFunc
//     };

// })();

// console.log(myModule);
// myModule.yourFunc();
// console.log(myModule.yourString);

//  PLAY MODULE
// ----------------------------------------------------------------------------

var playModule = function() {
    document.getElementById("json").onclick = screenPrint;
    document.getElementById("array").onclick = myArray;
    document.getElementById("object").onclick = myObject;
    document.getElementById("move").onclick = convertString;
    document.getElementById("div-builder").onclick = createDiv;
    document.getElementById("boxes").addEventListener('click', removeElement);
    document.getElementById("request").onclick = dbGetInfo;

    var string, obj, myObj,div;
    var counting = 1;
    var myArrayTest = [1,2,3,4,5,6];
    var myObjectTest = {
        firstName: 'John',
        lastName: 'Smith',
        birthYear: 1990,
        family: ['Jane', 'Mark', 'Bob', 'Emily'],
        job: 'teacher',
        isMarried: false
    }

    function dbGetInfo() {
        console.log("in function");
    }

    function createDiv() {     
            div = document.createElement("div");
            div.style.width = "150px";
            div.style.height = "150px";
            div.innerHTML = counting;
            div.style.border = "2px solid black";
            div.style.textAlign = "center";
            div.style.float = "left";
            div.style.marginLeft = "3px";
            div.style.marginTop = "3px";
            div.id = "div-" + counting;
            document.getElementById("boxes").appendChild(div);
        counting++
    }

    function removeElement(event) {
        event.target.remove();
    }

    function convertString(){
        string = document.getElementById("text-area");
        obj = JSON.parse(string.value);
        console.log(obj);
    }

    function showValue(){
        if (Array.isArray(obj)) {
            getMinArray();
            getMaxArray();
            myArray();
        } else if (obj !== null && typeof obj === 'object'){
            myObject();
        } else {
            document.getElementById("moved-text").innerHTML = "This is neither an object or an array!"
        }
    }

    function myArray() {
        arr1 = obj;
        for (var i = 0; i < arr1.length; i++)
        //    document.getElementById("left-array").innerHTML += "<tr><td>" + arr[i] + "</td></tr>";
           console.log(arr1[i]);      
    }
    
    function myObject() {
        myObj = obj;
        console.log(myObj);
        Object.keys(myObj).forEach(function(key) {
        document.getElementById("moved-text").innerHTML += (key, myObj[key]) + '<br>';
            });
    }

    function getMinArray(){
        arr2 = obj;
        minArr = Math.min.apply(Math, arr2); //Math.min(...arr)
        document.getElementById("left-array").innerHTML = minArr + "<br>";
    }

    function getMaxArray(){
        arr2 = obj;
        maxArr = Math.max.apply(Math, arr2);
        document.getElementById("right-object").innerHTML = maxArr + "<br>";
    }

    function screenPrint() {
        console.log("this is Json");
        convertString();
        showValue();
    }
}();

// {"type":"Fiat", "model":"500", "color":"white"}


// function moveText() {
//     var x = document.getElementById("text-area");
//     document.getElementById("moved-text").innerHTML = x.value;
//     x.value = '';
// }


// ALTERNATE LOOP FOR MYOBJECT
    // function myObject() {
    //     for (i in myObject) {
    //         document.getElementById("right-object").innerHTML += "<tr><td>" + (i, myObject[i]) + "</td></tr>";
    //     }
    // }