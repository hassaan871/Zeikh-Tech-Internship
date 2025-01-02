const arr = [[1,2],[3,4],[5,6]];
const arr2 = [1,2,[3,[4,5,[3,2]],6],7];

const flattedArray = arr.flat();
const flattedArray2 = arr.flat(2);
const flattedArrayInfinity = arr2.flat(Infinity);

console.log(flattedArray);
console.log(flattedArray2);
