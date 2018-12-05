const express = require('express');
// const bodyParser = require('body-parser');
const Handlebars = require('handlebars');
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'jeffkwok',
      password : '',
      database : 'postgres'
    }
});

const app = express();

// app.use(bodyParser.json());

app.get('/', (req, res) => {
    knex.select('*').from('clients').then(data => {
        const output = "<h1>Hello World!</h1><br>" + 
                "<p>Here are the list of clients<br>" +
                "<ul>{{#clients}}<li>ID: {{client_id}} <ul><li>Name: {{name}}</li> <li>Email: {{email}}</li> <li>City: {{city}}</li><li>Birth Year: {{birth_year}}</li></ul></li>{{/clients}}</ul>"       
        const template = Handlebars.compile(output);
        const result = template({'clients':data});
        res.send(result);
    });
});

app.listen(3000, () => {
    console.log('app is running on port 3000');
});
