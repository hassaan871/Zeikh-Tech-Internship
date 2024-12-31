// const fruits = ["apple","banana","mango","pineapple"];
// const list = fruits.entries();
// // console.log(list);
// let text = "";
// for(let x of list){
//     text += x;
// }
// console.log(text);

// const nums = [1,2,3,4];
// const list = nums.entries();
// let sum = 0;
// for(let x of nums){
//     sum += x;
// }
// console.log(sum);

const nums = ["one","two","three","four"];
const nums2 = new Array([5,6,7,8]);
const list = nums.entries();
let sum = 0;
for(let [index, value] of list){
    console.log(`index: ${index}, value: ${value}`);
    // console.log(value);
}
// console.log(sum);
// console.log(list);

// console.log('Type of sum: ',typeof sum);
// console.log('Type of Nums: ',typeof nums);
// console.log('Type of Nums2: ',typeof nums);


