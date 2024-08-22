// Define a function
function sayHello() {
  console.log('Hello World');
}

// Invoke, execute or call the function
sayHello();

// Define a function with parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

// Invoke function with arguments
add(10, 20);
add(50, 50);

// Parameters vs Arguments
// Parameters are the names of the variables that are used to pass data into a function.
// Arguments are the values that are passed into the function

// Returning a value
function subtract(num1, num2) {
  return num1 - num2;

  console.log('After the return statement');
}

const result = subtract(100, 21);

console.log(result);
