const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoPass = require('./config');

const Post = require('./models/post');

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
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    });
    post.save().then(createdPost => {
        console.log(createdPost);
        res.status(201).json({
            message: "Post was successful",
            postId: createdPost._id
        });
    });  
});

app.get('/api/posts', (req, res, next) => {
    // const posts = [
    //     {id: "1", title: "First Post", description: "First Description", content: "First post from the server"},
    //     {id: "2", title: "Second Post", description: "Second Description", content: "Second post from the server"},
    //     {id: "3", title: "Third Post", description: "Third Description", content: "Third post from the server"}
    // ];
    Post.find()
        .then(documents => {
            console.log(documents);
            res.status(200).json({
                message: 'Posts fetched successfully',
                posts: documents
            });
        });
});

app.delete("/api/posts/:id", (req,res,next) => {
    console.log(req.params.id);
    Post.deleteOne({
        _id: req.params.id
    }).then((result) => {
        console.log(result);
    });
    res.status(200).json({
        message: 'Post deleted successfully'
    });
});

module.exports = app;
