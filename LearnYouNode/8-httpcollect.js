const http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
    var dataString = '';
    response.setEncoding('utf-8');
    
    response.on('data', function(data) {
        dataString += data;
    });

    response.on('end', function() {
        console.log(dataString.length);
        console.log(dataString);
    });
});