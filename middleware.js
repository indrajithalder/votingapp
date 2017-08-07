var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: './uploads' });
var path = require('path');

module.exports = function(app, express){
  app.use(express.static('/public'));
  app.use(express.static(path.join(__dirname, '/app')));
  app.use(bodyParser.urlencoded({ extended: false }));
}
