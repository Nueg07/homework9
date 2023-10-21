var express = require('express');
var app = express();
var pool = require('./queries.js');
const swaggerSpec = require('./swagger');

var user = require('./routes/user.js');
var movies = require('./routes/movies.js');


app.use('/user', user);
app.use('/movies', movies);
pool.connect((err, res) => {
          console.log(err);
          console.log('connected');
});

app.listen(3000);
