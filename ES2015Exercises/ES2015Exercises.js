/***** TASK 2 *****/

var evens = [2, 4, 6, 8, 10];
var odds = evens.map(v => v + 1);
var pairs = evens.map(v => ({ even: v, odd: v + 1 }));
var nums = evens.map((v, i) => v + i);

console.log(odds);
console.log(pairs);
console.log(nums);

var odds = evens.map(v => {
    return v + 1;
});

/***** TASK 3 *****/

// ES5
function Numbers(nums) {
    this.nums = nums;
    this.fives = [];

    this.nums.forEach(function(v) {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    }.bind(this));
}

var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);

// ES6 (ES2015)
function Numbers(nums) {
    this.nums = nums;
    this.fives = [];

    this.nums.forEach(v => {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    });
}

var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);

var counter = {
    count: 0,
    inc: () => {
        this.count++;
    }
};

var func = counter.inc;
func();
console.log(counter.count); // 0
counter.inc();
console.log(counter.count); // still 0 using arrow functions

/***** TASK 5 *****/

function f(x, y, ...rest) {
    var str = '';
    str += 'Sum: ' + (x + y);

    rest.forEach(function(arg, i) {
        var type = arg instanceof Array ? 'Array' : arg instanceof Date ? 'Date' : typeof(arg);
        str += '\nrest value ' + i + ' is a: ' + type;
    });

    return str;
}

console.log(f(5, 2, true, 2, 'Hello world', [1, 2, 3], new Date(), {}));

var rest = [true, 2, 'Hello world', [1, 2, 3], new Date(), {}];
var restParams = [...rest];
console.log(f(5, 2, ...restParams)); // same output as before

var chars = [... f(5, 2, ...restParams)];
console.log(chars); // the output joined by each character

/***** TASK 6 *****/

let fName = 'Kurt';
let lName = 'Wonnegut';
let age = 98;

let obj = {fName, lName, age};
console.log(obj);

/***** TASK 7 *****/

([fName, lName] = [lName, fName]);
console.log(`First: ${fName}, Last: ${lName}`);

function getPerson() {
    return {
        firstName: 'Kurt',
        lastName: 'Wonnegut',
        gender: 'Male',
        email: 'kurt@wonnegut.dk',
        phone: '12345678'
    };
}

let {lastName, phone} = getPerson();
console.log(`lastName = ${lastName}, phone = ${phone}`);

/***** TASK 8 *****/

const myModule = require('./myModule');
console.log(myModule(5, 2, true, 2, 'Hello world', [1, 2, 3], new Date(), {}));

/***** TASK 9 *****/

class Shape {
    constructor(color) {
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }
    toString() {
        return `Shape with color = '${this._color}'`;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
}

let shape = new Shape('blue');
console.log(shape.toString());
shape.color = 'red';
console.log(shape.toString());

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this._radius;
    }
    toString() {
        return `Circle with color = '${this._color}', radius = ${this._radius}`;
    }
    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }
}

let circle = new Circle('yellow', 5);
console.log('Radius of circle: ' + circle.radius);
console.log('Area of circle: ' + circle.getArea());
console.log('Perimeter of circle: ' + circle.getPerimeter());
console.log(circle.toString());

circle.radius = 10;
console.log('New radius of circle: ' + circle.radius);
console.log('New area of circle: ' + circle.getArea());
console.log('New perimeter of circle: ' + circle.getPerimeter());
console.log(circle.toString());

class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get area() {
        return 2 * (Math.PI * Math.pow(this._radius, 2)) + (2 * Math.PI * this._radius) * this._height;
    }
    get perimeter() {
        return undefined;
    }
    get volume() {
        return Math.PI * Math.pow(this._radius, 2) * this._height;
    }
    toString() {
        return `Cylinder with color = '${this._color}', radius = ${this._radius}, height = ${this._height}`;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
}

let cylinder = new Cylinder('pink', 5, 10);
console.log('Area of cylinder: ' + cylinder.area);
console.log('Volume of cylinder: ' + cylinder.volume);
console.log(cylinder.toString());

/***** TASK 11 *****/

function* makeNames() {
    let firstNames = ['Lars', 'Jan', 'Ida', 'Tine', 'Thomas'];
    let lastNames = ['Mortensen', 'Peterson', 'Obama', 'Jensen', 'Hansen'];

    while (true) {
        let randIndex = Math.floor(Math.random() * firstNames.length);
        let randIndex2 = Math.floor(Math.random() * lastNames.length);
        
        yield { firstName: firstNames[randIndex], lastName: lastNames[randIndex2] };
    }
}

let index = 0;

for (let name of makeNames()) {
    console.log(name);

    if (index++ === 50) {
        break;
    }
}