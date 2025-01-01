const fruits = ["Banana", "Apple", "Mango", "Gauva", "Cherry"];
const inMyBucket = fruits.includes("Gauva");
// console.log(inMyBucket);

const atPosition = fruits.includes("Apple",2);
// console.log(atPosition);




const arr = ["a","b","c","d","e"];
// const isThere = arr.includes("a",-2);
const isThere = arr.includes("d",-2);
// computed index = length of array + fromIndex = 5+(-2)=3 false
// if the computed index is less than or equal to 0 then the entire array will be searched.
// const isThere = arr.includes("a",-100);
console.log(isThere);


