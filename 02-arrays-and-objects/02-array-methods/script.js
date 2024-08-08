let x;

const arr = [28, 38, 44, 29, 109, 800, 500, 700];

// push() - Push a value on the end of the array
arr.push(100);

// pop() - Take the last value off the array
arr.pop();

// unshift() - Add a value to the beginning of the array
arr.unshift(99);

// shift() - Take the first value off the array
arr.shift();

// reverse() - Reverses the order of the array
// arr.reverse();

// includes - return true if the value is found
x = arr.includes(109);

// indexOf - return the index of the value
x = arr.indexOf(38);

// Return array as a string
x = arr.toString();
x = arr.join('/');

// slice() - returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array
x = arr.slice(2, 6);

// splice() - works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
x = arr.splice(4, 2);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x = arr.splice(4, 1);

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);
