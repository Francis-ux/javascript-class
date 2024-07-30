// Numbers

let x;

const num = new Number(5);

// toString() - return a string representation of the number
x = num.toString();
// To get the length
x = num.toString().length;
// toFixed()- returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);
// toPrecision() - returns a number with the specified length
x = num.toPrecision(3);
// toExponential() - convert a number to exponential notation and return its value as a string
x = num.toExponential(2);
// toLocaleString() - returns a string representation of number, using the current locale
x = num.toLocaleString('zh-CN');
// valueOf - Get value
x = num.valueOf();

// The number object itself has some properties and methods
// Largest and smallest number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(typeof x, x);
