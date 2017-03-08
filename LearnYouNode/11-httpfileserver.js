const http = require('http');
const fs = require('fs');

var port = Number(process.argv[2]);
var filePath = process.argv[3];

var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.createReadStream(filePath).pipe(response);
});

server.listen(port);