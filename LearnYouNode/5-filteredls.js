const fs = require('fs');
const path = require('path');

var dirPath = process.argv[2];
var filterExt = '.' + process.argv[3];

fs.readdir(dirPath, function(err, files) {
    if (err) return console.log(err);
    if (!filterExt) return files;

    files.forEach(function(fileName) {
        if (path.extname(fileName) == filterExt) {
            console.log(fileName);
        }
    });
});