const arr = [[1,2,3],[4,5,6]];

const deepCopy = JSON.parse(JSON.stringify(arr))
deepCopy[0][0] = 0;
console.log(arr);
console.log(deepCopy);
