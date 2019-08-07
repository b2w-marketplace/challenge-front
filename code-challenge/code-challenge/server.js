const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/code-challenge'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/code-challenge/index.html'));
});

app.listen(3001);