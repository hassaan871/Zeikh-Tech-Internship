const watches = ["casio", "citizen"];
const luxuryWatches = ["rolex", "rado"];
const superLuxuryWatch = ["Patek Philippe"];

const result = watches.concat(luxuryWatches);
const superConcat = watches.concat(luxuryWatches, superLuxuryWatch);

console.log(result);
console.log(superConcat);

