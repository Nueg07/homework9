var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');


var pool = require('../queries.js');


router.get('/api/data', (req, res) => {
  
  res.json({ message: 'GET request' });
});


router.post('/api/data', (req, res) => {
  res.json({ message: 'POST request' });
});

router.put('/api/data/:id', (req, res) => {
  
  res.json({ message: `PUT request for ID ${req.params.id}` });
});


router.delete('/api/data/:id', (req, res) => {
  res.json({ message: `DELETE request for ID ${req.params.id}` });
});


router.post('/api/register', (req, res) => {
  
  const { username, password } = req.body;
  

  
  res.json({ message: 'User registered successfully' });
});

router.post('/api/login', (req, res) => {
  
  const { username, password } = req.body;
  

  const token = jwt.sign({ username }, secretKey);


  res.json({ token });
});

module.exports = router;
