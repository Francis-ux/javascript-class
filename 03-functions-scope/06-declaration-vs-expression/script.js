// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}

// When using declaration, you can invoke the functions before the declaration. With expressions, you cannot
console.log(addDollarSign(100));

console.log(displayName());

function displayName() {
  return 'John Doe';
}

// Function expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));
