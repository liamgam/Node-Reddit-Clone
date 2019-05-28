// server.js

const express = require('express'),
      server = express();

server.set('port', process.env.PORT || 3000);


server.get('/', (request,response) => {
   response.send('Home page');
});

server.get('/about',(request,response) => {
   response.send('About page');
});

server.use((request,response)=>{
   response.type('text/plain');
   response.status(505);
   response.send('Error page');
});


server.listen(3000,() => {
  console.log('Express server started at port 3000');
});