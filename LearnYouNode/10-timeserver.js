const net = require('net');
var port = Number(process.argv[2]);

var server = net.createServer(function(socket) {
    var date = new Date();
    var output = date.getFullYear() + '-' +
                 ('00' + (date.getMonth() + 1)).slice(-2) + '-' +
                 ('00' + date.getDate()).slice(-2) + ' ' +
                 ('00' + date.getHours()).slice(-2) + ':' +
                 ('00' + date.getMinutes()).slice(-2);
    socket.end(output + '\n');
});

server.listen(port);