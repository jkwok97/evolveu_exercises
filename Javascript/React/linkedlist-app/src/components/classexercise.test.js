
import ll from "./classexercise";

test ('what does this following do?', () => {
    let head = ll.getMyLL();
    console.log("hello world")
});

test('Lets test some link lists', () => {
	let head = ll.getMyLL();
    // Place the code below to print every value in the node
    console.log('--- The Value of each node ---');
    let x = head;
    // let y = '';
    while (x) {
        // y += x.value + ', ';
        console.log(x.value);
        x = x.nextNode;
    }
    // console.log(y);
    
    


    // Place the code below to print the number of nodes
    console.log('--- The number of nodes ---');
    let counter = 0;
    x = head;
    while (x) {
        counter++;
        x = x.nextNode;
    }
    console.log(counter);
	


	// Place the code below to add an attribute 'order' with the 
    // count to each node
    console.log('--- Add attribute order ---');
    x = head;
    counter = 0;
    while (x) {
        head.order = 1 + counter;
        x = x.nextNode;
        counter++;
        console.log(head.order);
    }
	

	
    // Place the code below to print the value and order for each node
    console.log('--- The Value and order each node ---');
    x = head;
    counter = 0;
    let y = '';
    while (x) {
        head.order = 1 + counter;
        y = x.value + ', ';
        console.log(y + head.order);
        x = x.nextNode;
        counter++;
    }
	


    // Place the code below to sum the order and print the sum
    console.log('--- The sum of order ---');
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
	

    // add between 2 and 3 call it 2.5  
    x = head;
    let n = x.nextNode.nextNode.value
    x.nextNode.nextNode = new ll.Node(2.5);
    x.nextNode.nextNode.value = n;
    console.log(x);
    // console.log(x);




    // delete number 3


	console.log('1');
});


    