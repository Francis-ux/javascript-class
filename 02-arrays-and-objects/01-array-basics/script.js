let x;

// Array Literal
const numbers = [12, 45, 29, 39, 102];
const mixed = [12, 'Hello', true, null, { a: 1, b: 2 }, [1, 2, 3]];

// Array Constructor
const fruits = new Array('Apple', 'Orange', 'Mango');

// Get value by index
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[0]}`;

x = numbers.length;

// Reassign value
fruits[2] = 'Banana';

// Add value
// fruits.length = 8;

x = fruits;

// Add value at the end
fruits[fruits.length] = 'Kiwi';
fruits[fruits.length] = 'Lemon';

x = fruits;

console.log(x);
