var path = require('path');

module.exports = function(app, express){
  app.get('/', function(req, res){
    console.log("Got a GET request for the homepage");
     res.sendFile(path.join(__dirname +'/../app/index.html'));
  });
}
