// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];

const users = [
  {
    name: 'John',
  },
  {
    name: 'Jane',
  },
  {
    name: 'Joe',
  },
];

// for (const user of users) {
//   console.log(user.name);
// }

// for (const item of items) {
//   console.log(item);
// }

// Loop over strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// Loop over maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}
