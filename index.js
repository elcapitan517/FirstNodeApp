var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello World');
});

app.get('/sayhi/:name', function(req, res) {
    res.send('Hi there, ' + req.params.name); 
});

app.listen(3000);
