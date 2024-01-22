const { add, square, PI } = require('./math');
const cats = require('./shelter');

console.log(add(9, 16));
console.log(square(9));
console.log(PI * square(7));

console.log("REQUIRED AN ENTIRE DIRECTORY!", cats);

