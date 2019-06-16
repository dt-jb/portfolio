
//require dependencies
const express = require('express');
//const data = require('data.json');
const path = require('path');
const app = express();

//var port = process.env.PORT || 3000;

//set up middleware
app.set('view engine', 'pug');
app.use('/static', express.static(path.resolve('public')));

//requires router files
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const projectRoutes = require('./routes/projects');

app.use(indexRoute);
app.use(aboutRoute);
app.use('/projects', projectRoutes);

//Error handling
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  //res.status(err.status);
  res.render('error');
});

//sets up the server
app.listen(process.env.PORT || 3000, () => {
  console.log('The application is running on localhost:3000!');
});
