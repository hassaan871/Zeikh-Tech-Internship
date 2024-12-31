const watches = ["casio", "citizen"];
const luxuryWatches = ["rolex", "rado"];
const superLuxuryWatch = ["Patek Philippe"];
const nums = [1,2,3];

const result = watches.concat(luxuryWatches);
const superConcat = watches.concat(luxuryWatches, superLuxuryWatch);
const strAndNums = nums.concat(watches);

const arr1 = [1,2,[3,4]];
const arr2 = [[5,6],7,8];
const concat = arr1.concat(arr2);

console.log(result);
console.log(superConcat);
console.log(strAndNums);
console.log(concat);



