var express = require('express');
var uaCompatible = require('ua-compatible');
var bodyParser = require('body-parser');
var controller = require('./controller/list');

var app = express();
var http = require('http');
app.use(uaCompatible);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use("/static", express.static(__dirname + "/static"));

app.locals.pretty = true;
app.set('port', '3002');
app.set('ip', 'localhost');
app.set('views', './views');
app.set('view engine', 'pug');

var index_controller = require('./controller/list.js');
app.get('/', index_controller.index);
app.post('/', index_controller.insert);

app.get('*', function(req, res) {
    res.render('error');
});

http.createServer(app).listen(app.get('port'), app.get('ip'), function() {
    console.log("Server Listening..");
});