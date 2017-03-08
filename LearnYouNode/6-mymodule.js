const fs = require('fs');
const path = require('path');

module.exports = function(dirPath, filterExt, callback) {
    var filterExt = '.' + filterExt;

    fs.readdir(dirPath, function(err, files) {
        if (err) return callback(err, null);
        if (!filterExt) return callback(null, files);
        
        return callback(null, files.filter(function(fileName) {
            return path.extname(fileName) == filterExt;
        }));
    });
};