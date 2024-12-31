const watches = ["casio", "citizen"];
const luxuryWatches = ["rolex", "rado"];
const superLuxuryWatch = ["Patek Philippe"];
const nums = [1,2,3];

const result = watches.concat(luxuryWatches);
const superConcat = watches.concat(luxuryWatches, superLuxuryWatch);
const strAndNums = nums.concat(watches);

console.log(result);
console.log(superConcat);
console.log(strAndNums);


