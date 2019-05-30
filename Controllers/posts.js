const express = require('express');

const router = express.Router();

router.post('/',(req,res) => {
   console.log(req.body)
 })

router.get('/new',(req,res) => {
   res.render('posts-new')
})

module.exports = router;