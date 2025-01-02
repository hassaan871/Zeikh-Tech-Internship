const arr = ['1','2','3','4','5'];
let initialValue = 0;
const result = arr.reduceRight(
    (accumulator, currentValue)=>accumulator = accumulator + currentValue,
    initialValue
);
console.log(result);
