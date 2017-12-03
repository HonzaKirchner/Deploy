var express = require('express');
var serveStatic = require('serve-static');
var request = require('request');

app = express();
app.use(serveStatic(__dirname+"/dist"));
var port = process.env.PORT || 5000;

app.route('/*').get(function(req, res, next) {
    res.redirect('/?q='+req.url);
});

app.listen(port);
console.log('server started '+ port);