const arr = [[1,2],[3,4],[5,6]];
const arr2 = [1,2,[3,[4,5],6],7];

const flattedArray = arr.flat();
const flattedArray2 = arr2.flat(2);

console.log(flattedArray);
console.log(flattedArray2);
