const http = require('http');

const app = http.createServer(function(req, res){
   res.writeHead(200);
   console.log(__dirname+req.url);
   res.end("hello egoing");
});

app.listen(3000);