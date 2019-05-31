const express = require('express');

const router = express.Router();

const Post = require('../models/post');

router.post('/',(req,res) => {
   // console.log(req.body)
   const post = new Post(req.body);

   post.save((err, post) => {
   	return res.redirect('/');
   })
 })

router.get('/new',(req,res) => {
   res.render('posts-new')
})

module.exports = router;