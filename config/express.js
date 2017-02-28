var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,path =  require('path');

var compression = require('compression');

app.set('clientPath', path.join(__dirname, '../', 'src'));
console.log(app.get('clientPath'));

app.use(express.static(app.get('clientPath')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compression());

module.exports = app;