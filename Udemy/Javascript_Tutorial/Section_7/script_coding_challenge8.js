// CODING CHALLENGE #8

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

//-----------------------------------------------------------

//CREATE CLASSES FOR STREETS, PARKS, TOWNELEMENTS

class TownElements {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Streets extends TownElements{
    constructor (name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`)
    }
}

class Parks extends TownElements {
    constructor (name, buildYear, numTrees, area) {
        super(name, buildYear);
        this.numTrees = numTrees;
        this.area = area;
    }

    densityOfTrees(){
        //number of trees / parkarea
        const density = this.numTrees / this.area;
        const roundDensity = Math.round(density * 10) / 10;
        console.log(`${this.name} has a tree density of ${roundDensity} trees per square km.`)
    }
}

//-----------------------------------------------------------------
//CREATE DATA FOR PARKS AND STREETS FOR TESTING

const allParks = [new Parks('Olympic Park', 1989, 500, 2.5),
                new Parks('Stampede Park', 1927, 800, 5.1),
                new Parks('Banff National', 1867, 100912, 65.7)];

const allStreets = [new Streets('Flames street', 1978, 1.5, 2),
                    new Streets('Olympic Way', 1989, 0.4, 1),
                    new Streets('Strathcona Drive', 1965, 4.7, 3),
                    new Streets('Center Ave', 1912, 31.9, 5)];

//-----------------------------------------------------------------
// CALCULATIONS

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];
}



//-----------------------------------------------------------------
// REPORTS

function reportParks(parks) {
    console.log('-------------PARKS REPORT-------------');
    // Density

    parks.forEach(element => element.densityOfTrees());

    // Average Age

    const ages = parks.map(element => new Date().getFullYear() - element.buildYear);
    const [totalAge, avgAge] = calc(ages);
    const roundAvgAge = Math.round(avgAge * 10) / 10;
    console.log(`Our ${parks.length} parks have an average age of ${roundAvgAge} years.`);

    // Which parks have more than a 1000 trees
    
    const index = parks.map(element => element.numTrees).findIndex(element => element >= 1000);
    console.log(`${parks[index].name} has more than 1000 trees.`)
}

function reportStreets (streets) {
    console.log('-------------STREETS REPORT-------------');
    // total and average lengths of streets

    const [totalLength, avgLength] = calc(streets.map(element => element.length));
    const roundTotalLength = Math.round(totalLength * 10) / 10;
    const roundAvgLength = Math.round(avgLength * 10) / 10;
    console.log(`Our ${streets.length} streets have a total length of ${roundTotalLength} km, with an average of ${roundAvgLength} km.`)

    // classify the streets by size

    streets.forEach(element => element.classifyStreet());

}

reportParks(allParks);
reportStreets(allStreets);

