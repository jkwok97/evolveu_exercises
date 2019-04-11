const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post('/api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: "Post was successful"
    });
});

app.get('/api/posts', (req, res, next) => {
    const posts = [
        {id: "1", title: "First Post", description: "First Description", content: "First post from the server"},
        {id: "2", title: "Second Post", description: "Second Description", content: "Second post from the server"},
        {id: "3", title: "Third Post", description: "Third Description", content: "Third post from the server"}
    ];
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    });
});

module.exports = app;