const age = 17;

// Using an if statement
if (age >= 18) {
  console.log('You are an adult');
} else {
  console.log('You are not an adult');
}

// Using a ternary operator
age >= 18
  ? console.log('You are an adult')
  : console.log('You are not an adult');

// Assigning a conditional value to a variable.
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You can not vote';
console.log(canVote);
console.log(canVote2);

// Multiple statement

const auth = true;

// Long version;
// let redirect

// if (auth) {
//   alert('Welcome');
//   redirect = '/dashboard';
// } else {
//   alert('Please login');
//   redirect = '/login';
// }

// Short ternary version
// const redirect = auth
//   ? (alert('Welcome'), '/dashboard')
//   : (alert('Please login'), '/login');

// console.log(redirect);

// Ternary with no else

// auth ? console.log('Welcome') : null;

// Shorthand ternary with no else
auth && console.log('Welcome');
