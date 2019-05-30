// app.js
const express = require('express'),
      exphbs = require('express-handlebars'),
      app = express(),
      users = require('./users'),
      postsRouter = require('./controllers/posts');

const bodyparser = require('body-parser'),
      expressValidator = require('express-validator');


// - Initial Setup

app.engine('handlebars', exphbs({ defaultlayout: 'main'}));
app.set('view engine', 'handlebars')
app.set('port', process.env.PORT || 3000);

// - Middleware

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use(expressValidator())

// - Routes
app.get('/', (req,res) => {
   res.render('home')
})

app.get('/users', (req, res) => {
  response.json(users)
})

app.use('/posts', postsRouter)



app.listen(3000,() => {
  console.log('Express server listening at port 3000')
})