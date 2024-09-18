const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// View prototype chain
console.log(socials.__proto__);

// Long form
socials.forEach(function (item) {
  console.log(item);
});

// Short form
socials.forEach((item) => console.log(item));

// We can also pass in the index and original array

socials.forEach((item, index) => console.log(`${index}: ${item}`));

// Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Arrays of objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { name: 'Facebook', url: 'https://www.facebook.com/' },
  { name: 'Instagram', url: 'https://www.instagram.com/' },
];

socialObjs.forEach((social) => console.log(social.url));
