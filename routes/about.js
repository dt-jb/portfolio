const express = require('express');
const router = express.Router();

//sets up about route to render about page
router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
