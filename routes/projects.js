const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;

router.get('/:id', (req, res) => {
  res.render('project', projects[req.params.id])
});


module.exports = router;
