const arr = [1,2,[1,[3]]]
const arr1 = ["Hello", "Hassaan"];

const splitWord = (word) => word.split("");

const flattedArray = arr.flatMap((x) => x);

const mapArray = arr.map(x => [x,x]);

console.log(flattedArray);
console.log(mapArray);

const flattedArrayStr = arr1.flatMap(splitWord);
const mapArrayStr = arr1.map(splitWord);

console.log(flattedArrayStr);
console.log(mapArrayStr);
