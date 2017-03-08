const http = require('http');

var urlArray = process.argv.slice(2);
var stringArray = [];
var count = 0;

function httpGet(urlIndex) {
    count++;

    http.get(urlArray[urlIndex], function(response) {
        var dataString = '';
        response.setEncoding('utf-8');
        
        response.on('data', function(data) {
            dataString += data;
        });

        response.on('end', function() {
            count--;
            stringArray[urlIndex] = dataString;

            if (count == 0) {
                printStringArray();
            }
        });
    });
}

function printStringArray() {
    stringArray.forEach(function(strings) {
        console.log(strings);
    });
}

for (var i = 0; i < urlArray.length; i++) {
    httpGet(i);
}