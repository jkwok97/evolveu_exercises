const express = require('express');
const Post = require('../models/post');

const router = express.Router();


router.post('', (req, res, next) => {
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

router.get('', (req, res, next) => {
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

router.get('/:id', (req, res, next) => {
    Post.findById(req.params.id)
        .then((post) => {
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ 
                    message: "Post Not Found"
                });
            }
        });
});

router.put("/:id", (req, res, next) => {
    const post = new Post({
        _id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    })
    Post.updateOne({ _id: req.params.id }, post)
        .then(result => {
            console.log(result);
            res.status(200).json({ message: "Update Successful" });
        })
        .catch(error => {console.log(error)});
});

router.delete("/:id", (req,res,next) => {
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

module.exports = router;