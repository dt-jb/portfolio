const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;

//sets up index route that renders the 'home' page
router.get('/', (req, res) => {
  res.render('index', { projects });
});

module.exports = router;
