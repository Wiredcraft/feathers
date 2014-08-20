'use strict';

var express = require('express');
var app = express();

var port = parseInt(process.env.PORT, 10) || 5000;

app.get('/', function(req, res) {
    res.redirect('/index.html');
});
app.use(express.static(__dirname + '/build'));

console.log('Now server listning at http://localhost:' + port);
app.listen(port);

