const fs = require('fs');

var filePath = process.argv[2];
var fileContent = fs.readFileSync(filePath).toString();
var fileLines = fileContent.split('\n');

console.log(fileLines.length - 1);