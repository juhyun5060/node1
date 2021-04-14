var http = require('http');
var url = require('url');
var fs = require('fs');
var app = http.createServer(function(req, res) {
    res.writeHead(200);
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname
    console.log(pathname);
})
app.listen(3000);