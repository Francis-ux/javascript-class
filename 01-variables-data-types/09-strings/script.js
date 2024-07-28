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

// Access value by key

x = s[6];

// Show the prototype of the String object
x = s.__proto__;

// Change case
x = s.toUpperCase();
x = s.toLowerCase();

// indexOf -  returns the indexof the first occurrence of a specific value in a string
x = s.indexOf('o');

// subString() - search a string for a specified value and returns the part of the string that matches the value.
x = s.substring(6, 11);

// Slice() - extracts a part of a string and returns the extracted part in a new string.
x = s.slice(0, 6); // To continue

// trim() - remove whitespace from both sides of a string
x = '          Micheal        ';
x = x.trim();

// replace() - replace all instances of a string
x = s.replace('World', 'Universe');

// includes() - return true if the string is found
x = s.includes('World');

// valueOf() - returns the primitive value of a string
x = s.valueOf();

// split() - returns and array of strings
x = s.split('');

console.log(x);
