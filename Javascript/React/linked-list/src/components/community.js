class People {
    constructor (name, age, dollars) {
        this.name = name;
        this.age = age;
        this.dollars = dollars;
    }

    birthday() {
        return (this.age++);
    }
        
    show() {
        return (`${this.name}, ${this.age}, ${this.dollars}`);
    }

    addPerson(name, age, dollars) {
        let peopleArray = [];
        let newPerson = new People (name, age, dollars);
        // let i;
        peopleArray.push(newPerson);
        console.log(peopleArray);
        return (peopleArray);
        // for (i=0; i < peopleArray.length; i++) {
        //     console.log(peopleArray);
        //     return (peopleArray[i]);
        // }
    }
}


export default { People };