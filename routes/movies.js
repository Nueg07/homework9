var express = require('express');
var router = express.Router();

var pool = require('../queries.js');

const users = [
 
];

const movies = [
 
];


router.get('/users', (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = 10; 

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const usersOnPage = users.slice(startIndex, endIndex);

  res.json({
    users: usersOnPage,
    page,
    totalPages: Math.ceil(users.length / limit),
  });
});


router.get('/movies', (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = 10; 

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const moviesOnPage = movies.slice(startIndex, endIndex);

  res.json({
    movies: moviesOnPage,
    page,
    totalPages: Math.ceil(movies.length / limit),
  });
});

module.exports = router;
