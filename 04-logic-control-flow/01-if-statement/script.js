// If statement syntax
if (true) {
  console.log('This is true');
}

if (false) {
  console.log('This is false');
}

// Evaluation expressions
const x = 10;
const y = 15;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is not equal to ${y}`);
}

// Block scope
if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}
// console.log(z); // This will throw an error

// Shorthand if/else

x >= y
  ? console.log(`${x} is greater than or equal to ${y}`)
  : console.log(`${x} is not greater than or equal to ${y}`);
