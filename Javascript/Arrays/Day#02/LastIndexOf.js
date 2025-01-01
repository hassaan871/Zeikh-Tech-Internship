const arr = ['a', 'b', 'c', 'a', 'd', 'e', 'a','f', 'g'];
// const result = arr.lastIndexOf('a');
// const result = arr.lastIndexOf('a', 2);
// const result = arr.lastIndexOf('a', 1);
// const result = arr.lastIndexOf('a', 4);

// computed index = length of array + fromIndex = 9+(-4)=5 false
const result = arr.lastIndexOf('a', -4);
console.log(result);
