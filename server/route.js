module.exports = function(app, express){
  app.get('/', function(req, res){
    console.log("Got a GET request for the homepage");
     res.sendFile('../app/index.html', {root: __dirname});
  });
}
