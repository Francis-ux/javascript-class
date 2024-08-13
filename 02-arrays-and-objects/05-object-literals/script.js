let x;

// Creating an object
const person = {
  name: 'John',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
  },
  hobbies: ['music', 'sports', 'reading'],
};

// Accessing object properties
x = person.name; // Dot Notation
x = person['age']; // Bracket Notation
x = person.address.state;
x = person.hobbies[0]; // Array notation

// Updating object properties
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Deleting object properties
delete person.age;

// Create new properties
person.hasChildren = false;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);
