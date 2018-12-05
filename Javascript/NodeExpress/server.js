const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgresql://localhost/postgres');
const Mustache = require('mustache');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

const Project = sequelize.define('clients', {
    title: Sequelize.STRING
});

  const User = sequelize.define('clients', {
    client_id: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    birth_year: {
        type: Sequelize.STRING
    }
  });

const clients = sequelize.query("SELECT * FROM clients").then(clients => {
// console.log(clients[0])
})

const output = Mustache.render(" Name: {{name}} Email: {{email}}", clients);
console.log(output);
