let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// Nesting arrays

// Nesting berries inside of fruits
fruits.push(berries);

x = fruits[0][1];

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];

x = allFruits[1][2];

// concat() - Concatenate arrays
x = fruits.concat(berries);

x = fruits[3][2];

// Spread operator (...)
x = [...fruits, ...berries];

// flat() - flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8, 9]];

x = arr.flat();

// Static methods of array object
x = Array.isArray(fruits);

// from() -  Create an array from and array like value
x = Array.from('123456789Hello');

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
