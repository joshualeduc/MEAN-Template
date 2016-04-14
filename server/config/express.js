var express = require('express')
,   bodyParser = require('body-parser')
,   cors =require('cors')
,   session = require('express-session')
,   passport = require('passport')
,   config = require('./config');

module.exports = function(){
  var app = express();
  app.use(bodyParser.json());
  app.use(cors());

  app.set('views', ['./view']);
  app.set('view engine', 'ejs');
  app.get('/', function(req, res){
    res.render('index');
  });

  app.use('/app', express.static('./public'));
  app.use('/assets', express.static('./assets'));
  app.use('/vendor', express.static('./node_modules'));

  return app;
};