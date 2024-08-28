// IIFE Syntax (Immediately Invoked Function Expression) Has it's own scope and runs right away

(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

// Params
(function (name) {
  console.log(`Hello ` + name);
})('Destiny');
