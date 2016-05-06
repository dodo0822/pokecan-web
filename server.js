var express = require('express');

var app = express();

app.use('/static', express.static(__dirname + '/static'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('home');
});

app.listen(8082, function() {
	console.log('started');
});
