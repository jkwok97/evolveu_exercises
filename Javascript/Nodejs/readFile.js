// const readFile = require('fs');

// readFile.readFile('SalesJan2009.csv', 'utf8', function (err,contents) {
//     console.log(contents);
// })

// const fs = require('fs');

// fs.readFile('SalesJan2009.csv', 'utf8', function (err, data) {
//     const dataArray = data.split('\r');
//     console.log(`Transaction Type: ${dataArray[1]}`);
//     // const newArray = dataArray[0].split(',');
//     // console.log(newArray);
// });

const Papa = require('papaparse');

Papa.parse('SalesJan2009.csv', {
    delimiter: '/r',
	complete: function(results) {
		console.log("Finished:", results.data[0][1]);
	}
});