// Type Conversion

// Convert string to number
let amount = '100';
amount = parseInt(amount);
amount = Number(amount);

// Convert number to string
let age = 30;
age = age.toString();
age = String(age);

// Convert string to decimal
let price = '10.99';
price = parseFloat(price);
price = Number.parseFloat(price);

// Convert number to boolean
let isActive = 1;
isActive = Boolean(isActive);
console.log(typeof isActive, isActive);
