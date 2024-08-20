const post = {
  id: 1,
  title: 'Post One',
  body: 'This is post one',
};

// Convert to JSON string
const str = JSON.stringify(post);
console.log(str);

// Convert from JSON string
const obj = JSON.parse(str);
console.log(obj);

// JSON & arrays

const posts = [
  { id: 1, title: 'Post One', body: 'This is post one' },
  { id: 2, title: 'Post Two', body: 'This is post two' },
];

const str2 = JSON.stringify(posts);
console.log(str2);

const postObj = JSON.parse(str2);
console.log(postObj);
