const fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) return console.log(err);

    var fileLines = data.split('\n');
    console.log(fileLines.length - 1);
});