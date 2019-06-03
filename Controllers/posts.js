const express = require('express');

const router = express.Router();

const Post = require('../models/post');

router.post('/',(req,res) => {
   const post = new Post(req.body);

   post.save()

   Post.find({})
   .then(posts => {
   	res.render('posts-index', {posts});
   })
   .catch(err => {
   	console.log(err.message)
   })
})

router.get('/new',(req,res) => {
   res.render('posts-new')
})


module.exports = router;