// Data Types
/*
A value in JavaScript has a data type and it always of a certain type.For example,a string or a number.
*/
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Object and Symbol

// Number
/*
The number type represent both integer and floating point numbers
*/

let n = 123;
n = 12.345;

console.log(n);

// BigInt
/*
The BigInt type can be used to represent arbitrarily large integers
*/

let big = 1234567890123456789012345678901234567890n;
console.log(big);

// The "n" at the end means it's a BigInt

// String
/*
The string type represents a sequence of characters
A string in Javascript must be enclosed in single or double quotes
*/

let name = 'John';
name = 'Jane';

let calculation = 1 + 2;
console.log(calculation);

// In javascript there are 3 type of quotes
// 1. Single quotes
// 2. Double quotes
// 3. Backticks

// Single quotes
let str = 'This is a string';
console.log(str);

// Double quotes
let str2 = 'This is also a string';
console.log(str2);

// Backticks
let str3 = `This is also a string`;
console.log(str3);

let firstName = 'John';
let lastName = 'Doe';
console.log(`My name is ${firstName} ${lastName}.`);
console.log('My name is ' + firstName + ' ' + lastName + '.');

// Boolean
/*
The boolean type has tow values true and false
*/

let acceptTermsAndConditions = true;
acceptTermsAndConditions = false;
console.log(acceptTermsAndConditions);

// Null
let age = null;
console.log(age);

// Undefined

let class2024;

console.log(class2024);

// Object and Symbols

let person = {
  name: 'John',
  age: 30,
};

console.log(person.name, typeof person.age);
