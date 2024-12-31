const arr = ["Hello", "Hassaan"];

const splitWord = (word) => word.split("");

const flattedArray = arr.flatMap(splitWord);

const mapArray = arr.map(splitWord);

console.log(flattedArray);
console.log(mapArray);
