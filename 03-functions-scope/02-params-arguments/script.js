// Default Parameters

function registerUser(user = 'Bot') {
  return user + ' is registered';
}

console.log(registerUser());

// Rest Parameters
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 100));

// Object as parameters
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

const user = {
  id: 56,
  name: 'Wisdom Megamindset',
};

const user2 = {
  id: 59,
  name: 'Destiny Megamindset',
};

console.log(loginUser(user));
console.log(loginUser(user2));

// Arrays as parameters
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

console.log(getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
