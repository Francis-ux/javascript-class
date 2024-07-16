// Stack and heap
/*
Stack and heap are two areas in memory where data is stored. The stack is used for static memory allocations,While the heap is used for dynamic memory allocations

static memory allocation mean that the size and location of the memory is fixed at compiled time, while dynamic memory allocation mean that the size and location of the memory is not fixed at compiled time and can change.
*/

// Stack

const name = 'John Doe';
const age = 30;

let newName = name;
newName = 'Jane Doe';

console.log(name, newName);

// Heap

const person = {
  name: 'John Wick',
  age: 30,
  isMale: true,
};

console.log(person);

let newPerson = person;
newPerson.name = 'Jane Wick';
newPerson.age = 31;
newPerson.isMale = false;
newPerson.address = '123 Main Street';

console.log(person);
