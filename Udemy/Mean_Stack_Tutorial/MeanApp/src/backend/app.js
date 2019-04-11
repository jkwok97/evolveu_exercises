const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoPass = require('./config');

const postRoutes = require('./routes/posts');

const app = express();

mongoose.connect(`mongodb+srv://jkwok97:${mongoPass}@cluster0-2jyub.mongodb.net/node-angular?retryWrites=true`)
    .then(() => {
        console.log("connected to mongoDB");
    })
    .catch(() => {
        console.log("connection failed");
    });

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use("/api/posts", postRoutes);

module.exports = app;
