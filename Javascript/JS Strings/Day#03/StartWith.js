const str = 'The quick brown fox jumps over the lazy dog.';

// const result = str.startsWith('the');
// const result = str.startsWith('The');
// const result = str.startsWith('The', 1);
// const result = str.startsWith('quick', 1);
// const result = str.startsWith('quick', 4);
// const result = str.startsWith('quick', -4);
const result = str.startsWith('dog.', -4);

console.log(result);
