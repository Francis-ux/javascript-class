// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.firstName);

// Destructuring object properties

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John Doe',
    age: 30,
  },
};

const {
  id: todoId,
  title: todoTitle,
  user: { name: UserName },
} = todo;

console.log(UserName);

// Destructuring arrays & using the rest/spread operator

const numbers = [23, 67, 33, 49, 52];

const [firstNumber, secondNumber, ...rest] = numbers;

console.log(firstNumber, secondNumber, rest);
