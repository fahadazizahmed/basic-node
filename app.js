var express = require('express');
var app = express();
var myController = require('./Controller/myRouter');
var bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.use(express.static('./public'));
app.use(bodyParser.urlencoded());
app.use(myController);


app.listen(200);
console.log('app is listen on port 200');
