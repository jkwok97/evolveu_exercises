
import ll from "./classexercise";

test ('what does this following do?', () => {
    let head = ll.getMyLL();
    console.log("hello world")
});

test('Lets test some link lists', () => {
	let head = ll.getMyLL();
    // Place the code below to print every value in the node
    let x = head;
    let y = '';
    while (x) {
        y += x.value + ', ';
        x = x.nextNode;
    }
    console.log(y);
    console.log('--- The Value of each node ---');
    


    // Place the code below to print the number of nodes
    let counter = 0;
    x = head;
    while (x) {
        counter++;
        x = x.nextNode;
    }
    console.log(counter);
	console.log('--- The number of nodes ---');


	// Place the code below to add an attribute 'order' with the 
    // count to each node
    x = head;
    counter = 0;
    while (x) {
        head.order = 1 + counter;
        x = x.nextNode;
        counter++;
        console.log(head.order);
    }
	console.log('--- Add attribute order ---');

	
    // Place the code below to print the value and order for each node
    x = head;
    counter = 0;
    y = '';
    while (x) {
        head.order = 1 + counter;
        y = x.value + ', ';
        console.log(y + head.order);
        x = x.nextNode;
        counter++;
    }
	console.log('--- The Value and order each node ---');


    // Place the code below to sum the order and print the sum
    x = head;
    let sum = 0;
    counter = 0
    while (x) {
        head.order = 1 + counter;
        x = x.nextNode;
        sum = sum + head.order;
        counter++
    }
    console.log(sum);
	console.log('--- The sum of order ---');


	console.log('1');
});


// add between 2 and 3 call it 2.5

// delete number 3