// CODING CHALLENGE #4

// Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
// 1. For each of them, create an object with properties for their full name, mass, and height
// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
// Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
// GOOD LUCK 😀

var john = {
    fullName: 'John Smith',
    mass: 78,
    height: 3.6,
    calcBmi: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

john.calcBmi();
console.log(john.BMI);

var mark = {
    fullName: 'Mark Doe',
    mass: 60,
    height: 2.9,
    calcBmi: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

mark.calcBmi();
console.log(mark.BMI);

if (john.calcBmi() > mark.calcBmi()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.BMI);
} else if (mark.BMI > john.BMI) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.BMI);
} else {
    console.log('They have the same BMI');
}



