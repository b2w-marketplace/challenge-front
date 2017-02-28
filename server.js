var http = require('http')
,   app = require('./config/express');

http.createServer(app).listen(3000, cb);

function cb() {
    console.info('The server is listening on port ' + this.address().port);
};