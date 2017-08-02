var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: './uploads' });

module.exports = function(app, express){
  app.use(express.static('public'));
  app.use(express.static('app'));
  app.use(bodyParser.urlencoded({ extended: false }));
}
