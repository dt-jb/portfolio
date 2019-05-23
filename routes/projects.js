const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;

router.get('/:id', (req, res) => {
  //res.render('project', projects[req.params.id]);
  const id = parseInt(req.params.id);
  if(typeof id === 'number' && id < projects.length){
    res.render('project', projects[req.params.id]);
  } else {
    res.redirect('/');
  }
});


module.exports = router;
