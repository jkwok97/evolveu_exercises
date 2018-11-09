    
    
    class Person {
        constructor (name, age, bankAccount){
            this.name = name;
            this.age = age;
            this.bankAccount = bankAccount;
            this.counter = 0;
        }

        happyBirthday() {
            this.counter++
            if (this.counter === 12) {
                this.age++
                this.counter = 0;
            }
        }

        gettingPaid() {};
 
        }
    
    class Farmer extends Person {
        constructor (name, age, bankAccount, payAmount) {
            super(name, age, bankAccount);
            this.payAmount = payAmount;
            this.counter1 = 0
        }

        gettingPaid() {
            this.counter1++
            if (this.counter1 === 12) {
                this.bankAccount += this.payAmount;
                this.counter1 = 0;
            }  
        }
    }

    class FullStack extends Person {
        constructor (name, age, bankAccount, payAmount) {
            super(name, age, bankAccount);
            this.payAmount = payAmount;
        }
        gettingPaid() {
            this.bankAccount += this.payAmount;
        }
        
    }

    class Clerk extends Person {
        constructor (name, age, bankAccount) {
            super(name, age, bankAccount);
            this.payAmount = 0;
            this.hoursPerMonth = 150;
            this.payPerHour = 15;
        }

        gettingPaid() {
            this.payAmount = this.hoursPerMonth * this.payPerHour;
            this.bankAccount += this.payAmount;
        }
    }
    
    const jeff = new FullStack('Jeff', 39, 0, 5000);
    const frank = new FullStack('Frank', 25, 0, 5000);
    const joe = new Farmer('Joe', 50, 0, 100000);
    const lee = new Clerk('Lee', 19, 0);

    // personArray = [jeff, frank, joe, lee];
    document.getElementById("new-month").addEventListener('click', fullMonth);

    const personArray = [];
    personArray.push(jeff, frank, joe, lee);

    console.log(personArray);

    function fullMonth(event){
        for (var i = 0; i < personArray.length; i++) {
            personArray[i].gettingPaid();
            personArray[i].happyBirthday();
            console.log(personArray[i]);
            document.getElementById("top-div").innerHTML = `Name: ${personArray[0].name}<br>Age: ${personArray[0].age}<br>Bank Account: ${personArray[0].bankAccount}`;
            document.getElementById("bottom-div").innerHTML = `Name: ${personArray[1].name}<br>Age: ${personArray[1].age}<br>Bank Account: ${personArray[1].bankAccount}`;
            document.getElementById("right-div").innerHTML = `Name: ${personArray[2].name}<br>Age: ${personArray[2].age}<br>Bank Account: ${personArray[2].bankAccount}`;
            document.getElementById("left-div").innerHTML = `Name: ${personArray[3].name}<br>Age: ${personArray[3].age}<br>Bank Account: ${personArray[3].bankAccount}`;
        }
    }

    
    // document.getElementById("new-month").addEventListener('click', fullMonth);


    
    // jeff.gettingPaid();
    // jeff.happyBirthday();
    // console.log(jeff);
    // lee.gettingPaid();
    // lee.happyBirthday();
    // console.log(lee);

    
    
    