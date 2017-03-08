/***** TASK 1 *****/

var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];

console.log(names.filter(function(name) {
    return name.length <= 3;
}));

console.log(names.map(function(name) {
    return name.toUpperCase();
}));

/***** TASK 2 *****/

function myFilter(array, callback) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(myFilter(names, function(name) {
    return name.length <= 3;
}));

function myMap(array, callback) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }

    return newArray;
}

console.log(myMap(names, function(name) {
    return name.toUpperCase();
}));

/***** TASK 3 *****/

Array.prototype.myFilter = function(callback) {
    var newArray = [];

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }

    return newArray;
};

console.log(names.myFilter(function(name) {
    return name.length <= 3;
}));

Array.prototype.myMap = function(callback) {
    var newArray = [];

    for (var i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }

    return newArray;
};

console.log(names.myMap(function(name) {
    return name.toUpperCase();
}));

/***** TASK 4 *****/

console.log('<ul>' + names.map(function(name) {
    return '<li>' + name + '</li>';
}).join('') + '</ul>');

var persons = [{ name: 'Lars', phone: 12345678 }, { name: 'Peter', phone: 83927463 }, { name: 'Jan', phone: 23869012 }, { name: 'Bo', phone: 87654321 }];

console.log('<table><thead><tr><th>Name</th><th>Phone</th></tr></thead><tbody>'
            + persons.map(function(person) {
                return '<tr><td>' + person.name + '</td><td>' + person.phone + '</td></tr>';
            }).join('')
            + '</tbody></table>');