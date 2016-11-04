var debug = require('debug')('myMaps');
var app = require('../app');

console.log(new Date().getMinutes())
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});
