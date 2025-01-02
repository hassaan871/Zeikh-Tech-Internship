// const arr = [1,2,3,4,5];
// const arr = ['1','2','3','4','5'];
// const arr = [true, false];
// const arr = [false, false];
const arr = [true, false, true];
// const arr = [{val: 1}, {val:2}];

let initialValue = 0;
const reducedArr = arr.reduce(
    (accumulator, currentValue)=>accumulator =  accumulator+currentValue, 
    initialValue
);
console.log(reducedArr);
