/*
Setup your server, routes and middleware

Create an app.js file at the root of your directory.
Add variables to require the necessary dependencies. You'll need to require:
Express
Your data.json file
Optionally - the path module which can be used when setting the absolute path in the express.static function.
Set up your middleware:
set your “view engine” to “pug”
use a static route and the express.static method to serve the static files located in the public folder

Set your routes. You'll need:
An "index" route (/) to render the "Home" page with the locals set to data.projects
An "about" route (/about) to render the "About" page

Dynamic "project" routes (/project or /projects) based on the id of the project
that render a customized version of the Pug project template to show off each project.
Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.
Finally, start your server. Your app should listen on port 3000, and log a string to the console that
says which port the app is listening to.
*/

const express = require('express');
const data = require('data.json');
const path = require('path');

const app = express();

app.use(path());
app.set('view engine', 'pug');
app.use(express.static('public'));

const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const projectRoutes = require('./routes/projects');

app.use(indexRoute);
app.use(aboutRoute);
app.use('/projects', projectRoutes);


app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
});
