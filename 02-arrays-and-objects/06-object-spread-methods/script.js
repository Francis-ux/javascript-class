let x;

// Create an object using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

// Object Nesting
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };
x = obj3;
// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);
x = obj4;

// Array of objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos[1].name;

// Get array of object keys
x = Object.keys(todos);

// Get length of an object
x = Object.values(todos).length;

// Get array of object key/value pairs
x = Object.entries(todos);

// Check if object has a property
x = todos[0].hasOwnProperty('name');

console.log(x);
