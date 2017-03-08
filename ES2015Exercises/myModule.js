module.exports = function(x, y, ...rest) {
    var str = '';
    str += 'Sum: ' + (x + y);

    rest.forEach(function(arg, i) {
        var type = arg instanceof Array ? 'Array' : arg instanceof Date ? 'Date' : typeof(arg);
        str += '\nrest value ' + i + ' is a: ' + type;
    });

    return str;
};