let x;

const name = 'Micheal';
const age = 51;

// concatenation
// Concatenation is the process of joining two or more strings together
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
// Template literals are a way to create strings that are made up of multiple lines
// and expressions using the backtick (`) character
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods
// String properties are properties that are available on all strings
// String methods are functions that are available on all strings

// Creating a "string object" (JS does this automatically when using property or method on a primitive string)

const s = new String('Hello World');

x = typeof s;

x = s.length;

console.log(x);
