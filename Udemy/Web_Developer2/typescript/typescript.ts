function sum( a:number, b:number ) {
    return a + b;
}

const sum2 = ( a:number, b:number ) => {
    return a + b;
}

const sum3 = ( a:number, b:number ) => {
    return a + b;
}

const answer = sum(3,5);

console.log(answer);

//DIFFERENT TYPES

//boulean
let isCool: boolean = true;

//number
let age: number = 56;

//STRING
let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm not old, I'm only ${age}!`

//ARRAY
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['cat', 'dog', 'pig'];

//OBJECTS
let wizard: object = {
    a: 'John'
}

//NULL AND UNDEFINED
let meh: undefined = undefined;
let nooo: null = null;

//TUPLE
let basket: [string, number];
basket = ['basketball', 5];

//ENUMERABLE
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2];

//ANY
let whatever: any = 'aaaaaaaaaaaa noooooooo'
whatever = 10;

//VOID
let sing = (): void => {
    console.log('boooooo');
    // return 'booooooo' => this would throw error
}

//NEVER
let error = (): never => {
    throw Error('ooops');
}
//never checks to make sure nothing is returned and unreachable code

//INTERFACE
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('Fight');
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('Fight');
}

//TYPE ASSERTION
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy
dog.count

//FUNCTION
let fightRobotArmy3 = (robots: RobotArmy):void => {
    console.log('Fight');
}

//CLASS
class Animal {
    sing: string = 'lalalala'
    constructor(sound: string) {
        this.sing = sound;
    }
    greet() {
        return `Hello ${this.sing}`
    }
}
let lion = new Animal('Raaaaaawwr')
lion.greet();

//UNION
let confused: string | number = "hello"
let confused2: string | number = 5
