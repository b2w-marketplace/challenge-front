var express = require('express');
var app = express();
var path = require('path');
var routes = require('../app/routes');

app.use(express.static(path.join(__dirname, '../public/')));

routes(app);

module.exports = app;