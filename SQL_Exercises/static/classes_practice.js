    
    
    class Person {
        constructor (name, age, bankAccount){
            this.name = name;
            this.age = age;
            this.bankAccount = bankAccount;
        }

        happyBirthday() {
            this.age++;
        }

        gettingPaid() {};
 
        }
    
    class Farmer extends Person {
        constructor (name, age, bankAccount, payAmount) {
            super(name, age, bankAccount);
            this.payAmount = payAmount;
            this.counter = 0
        }

        gettingPaid() {
            this.counter++
            if (this.counter === 12) {
                this.bankAccount += this.payAmount;
                this.counter = 0;
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
    const frank = new FullStack('Frank', 50, 0, 5000);
    const joe = new Farmer('Joe', 41, 0, 100000);
    const lee = new Clerk('Lee', 19, 0);

    // personArray = [jeff, frank, joe, lee];
    document.getElementById("new-month").addEventListener('click', fullMonth);

    const personArray = [];
    personArray.push(jeff, frank, joe, lee);

    console.log(personArray);

    function fullMonth(event){
        for (var i = 0; i < personArray.length; i++) {
            personArray[i].gettingPaid();
            console.log(personArray[i]);
            document.getElementById("top").innerHTML += `${personArray[0].name}<br> ${personArray[0].age}<br>`;
        }
    }

    
    // document.getElementById("new-month").addEventListener('click', fullMonth);


    
    // jeff.gettingPaid();
    // jeff.happyBirthday();
    // console.log(jeff);
    // lee.gettingPaid();
    // lee.happyBirthday();
    // console.log(lee);

    
    
    