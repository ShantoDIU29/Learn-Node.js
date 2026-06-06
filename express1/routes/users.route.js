const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'register.html'));
});

router.get('/login', (req, res) => {
  res.send('Login Page Working');
});

module.exports = router;