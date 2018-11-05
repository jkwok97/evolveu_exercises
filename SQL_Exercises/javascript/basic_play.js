

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
    var x = document.getElementById("text-area").value;
    document.getElementById("moved-text").innerHTML = x;
    document.getElementById("text-area").innerHTML = '';
}


