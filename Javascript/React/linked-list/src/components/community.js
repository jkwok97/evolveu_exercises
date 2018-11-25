class People {
    constructor (name, age, dollars) {
        this.name = name;
        this.age = age;
        this.dollars = dollars;
    }
}

class Community {
    constructor (name, age, dollars) {
        this.newPerson = new People (name, age, dollars);
        this.peopleArray = [];
        this.peopleArray.push(this.newPerson);
    }

    birthday() {
        let i;
        for (i=0; i < this.peopleArray.length; i++) {
            this.peopleArray[i].age++;
        }
        return (this.newPerson.age);
    }

    addPerson(name, age, dollars) {
        let newPerson = new People (name, age, dollars);
        this.peopleArray.push(newPerson);
        return (newPerson);
    }
    
    show() {
        let i;
        let people = ``;
        for (i=0; i < this.peopleArray.length; i++) {
            people += `Name: ${this.peopleArray[i].name}, Age: ${this.peopleArray[i].age}, Dollars: ${this.peopleArray[i].dollars} | `
        }
        return (people);
        
    }

    sumAge() {
        let i;
        let newArray = [];
        for (i=0; i < this.peopleArray.length; i++) {
            newArray.push(parseInt(this.peopleArray[i].age));
        }
        let sum = newArray.reduce((a, b) => a + b, 0);
        return (sum);
    }
}


export default { People, Community };