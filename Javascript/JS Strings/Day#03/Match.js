const paragpraph = "The quick brown fox jumps over the lazy dog. It barked.";

const regex = /[A-Z]/g;

const found = paragpraph.match(regex);

console.log(`typeof found: ${typeof found}`);
console.log(`found isArray: ${Array.isArray()}`);

console.log(`typeof regex: ${typeof regex}`);
console.log(`regex isArray: ${Array.isArray()}`);


console.log(found);
