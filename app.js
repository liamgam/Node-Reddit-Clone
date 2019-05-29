// app.js
const express = require('express'),
      exphbs = require('express-handlebars'),
      app = express(),
      users = require('./users');

app.engine('handlebars', exphbs({ defaultlayout: 'main'}));
app.set('view engine', 'handlebars')

app.set('port', process.env.PORT || 3000);

app.get('/', (request,response) => {
   response.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
  response.json(users);
});

app.get('/posts/new',(req,res) => {
   res.render('posts-new');
});


app.listen(3000,() => {
  console.log('Express server listening at port 3000');
})