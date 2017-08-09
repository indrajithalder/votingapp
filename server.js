var express =  require('express');
var app = express();
var mongoose = require('mongoose');

require('./server/config/middleware.js')(app, express);
require('./server/route.js')(app, express);

//var conn = mongoose.connect('mongodb://dbroot:dbroot@ds129043.mlab.com:29043/vote');

//console.log(conn);

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port)
})
