var express = require('express');
var app = express();
var pool = require('./queries.js');

var films = require('./routes/films.js');
var categories = require('./routes/categories.js');


app.use('/films', films);
app.use('/categories', categories);
pool.connect((err, res) => {
          console.log(err);
          console.log('connected');
});

app.listen(3000);
