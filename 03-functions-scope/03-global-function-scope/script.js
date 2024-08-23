// 'window' is globally scoped
// console.log(window);
// alert('Hello World');
// console.log(innerWidth);

// Global Scope Variable
const x = 100;

console.log(x, 'in global');

function run() {
  // Access global vars in functions
  console.log(window.innerHeight);
  console.log(x, 'in function');
}

run();

// Access global vars in blocks
if (true) {
  console.log(x, 'in block');
}

function add() {
  // Overwriting global x (variable shadowing)
  const x = 1;
  const y = 50;
  console.log(x + y);
}

add();

// Read and study about global function scope,block scope and function scope
