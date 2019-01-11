function sum(a, b) {
    return a + b;
}
var sum2 = function (a, b) {
    return a + b;
};
var sum3 = function (a, b) {
    return a + b;
};
var answer = sum(3, 5);
console.log(answer);
//DIFFERENT TYPES
//boulean
var isCool = true;
//number
var age = 56;
//STRING
var eyeColor = 'brown';
var favoriteQuote = "I'm not old, I'm only " + age + "!";
//ARRAY
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['cat', 'dog', 'pig'];
//OBJECTS
var wizard = {
    a: 'John'
};
//NULL AND UNDEFINED
var meh = undefined;
var nooo = null;
//TUPLE
var basket;
basket = ['basketball', 5];
//ENUMERABLE
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
//ANY
var whatever = 'aaaaaaaaaaaa noooooooo';
whatever = 10;
//VOID
var sing = function () {
    console.log('boooooo');
    // return 'booooooo' => this would throw error
};
//NEVER
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('Fight');
};
var fightRobotArmy2 = function (robots) {
    console.log('Fight');
};
var dog = {};
dog.count;
//FUNCTION
var fightRobotArmy3 = function (robots) {
    console.log('Fight');
};
//CLASS
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('Raaaaaawwr');
lion.greet();
//UNION
var confused = "hello";
var confused2 = 5;
