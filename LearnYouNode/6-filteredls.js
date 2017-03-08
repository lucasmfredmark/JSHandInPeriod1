const mymodule = require('./6-mymodule');

var dirPath = process.argv[2];
var filterExt = process.argv[3];

mymodule(dirPath, filterExt, function(err, files) {
    if (err) return console.log(err);
    
    files.forEach(function(fileName) {
        console.log(fileName);
    });
});