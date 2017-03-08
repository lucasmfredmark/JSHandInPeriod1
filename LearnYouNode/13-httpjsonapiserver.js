const http = require('http');
const url = require('url');

var port = Number(process.argv[2]);

function processRequest(url, date) {
    var result = {};

    if (url == '/api/parsetime') {
        result = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
    } else if (url == '/api/unixtime') {
        result = { 'unixtime': date.getTime() };
    }

    return result;
}

var server = http.createServer(function(request, response) {
    if (request.method != 'GET') return response.end('Not a GET request.\n');

    var urlInfo = url.parse(request.url, true);
    var date = new Date(urlInfo.query.iso);
    var data = processRequest(urlInfo.pathname, date);
    
    if (data) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(data));
    } else {
        response.writeHead(400),
        response.end();
    }
});

server.listen(port);