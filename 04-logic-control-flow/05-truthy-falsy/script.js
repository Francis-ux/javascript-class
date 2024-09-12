// Falsy value
// false
// 0
// "" or '' (empty string)
// null
// undefined
// NaN

// Truthy value
// true
// everything else that is not falsy
// '0' (0 in a string)
// ' ' (space in a string)
// 'false' (false in a string)
// [] (empty array)
// {} (empty object)
// function () {} (empty function)

const x = function () {};

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy event
const children = 3;

// Checking for literal 0
if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('You have no children');
}

// Solution
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('You have no children');
}

// Checking for empty objects
const users = {
  name: 'John',
};

// Always true, even when no properties
if (users) {
  console.log('List User');
} else {
  console.log('No User');
}

// Solution
if (Object.keys(users).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

// Loose equality (==)
console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true

// strict equality (===)
console.log(false === 0); // false
console.log('' === 0); // false
console.log(null === undefined); // false
