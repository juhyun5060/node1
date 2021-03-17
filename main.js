const http = require('http');
// const fs = require('fs');
const url = require('url');

const app = http.createServer(function(req, res){
   let _url = req.url;
   const queryData = url.parse(_url, true).query;
   let title = queryData.id;
   console.log(queryData.id);
   if(_url === '/') {
      title = 'Welcome';
   }
   if(_url === '/favicon.ico') {
      return res.writeHead(404);
   }
   res.writeHead(200);
   const template = `
    <!doctype html>
    <html>
    <head>
        <title>WEB1 - ${title}</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
            <li><a href="/?id=HTML">HTML</li>
            <li><a href="/?id=CSS">CSS</li>
            <li><a href="/?id=JavaScript">JavaScript</li>
        </ul>
        <h2>${title}</h2>
        
    </body>
    </html>
    `;
   res.end(template);
});

app.listen(3000);
