// //Leet code problem

// const { log } = require("console");

// /**
//  * 2635. Apply Transform Over Each Element in Array
//  */

// const arr = [1,2,3,4];
// function fn(num){
//     return num+1;
// }

// function Test(arr, fn){
//     let myArr = [];
//     const values  = arr.keys();
//     for(let i of values){
//         console.log(i);
        
//         myArr[i] = fn(arr[i]);
//     }
//     // console.log(myArr.length);
    
//     return myArr;
// }

// const result = Test(arr,fn);

// console.log(result);


// const arr1 = [
//     {
//         name: "umair",
//         arr: [1,2]
//     },
//     1,2
// ]

// // const arr2 = [
// //     {
// //         name: "name",
// //         arr: [1,2]
// //     },
// //     1,2

// // ]
// const arr2 = structuredClone(arr1) // = [...arr1],  = arr1
// arr2[0].name = "Hassaan"

// console.log({arr1,arr2});

// let a;


let opening = '(((';
let closing = ')))';

let combination = opening+closing;
combination = combination.split('');

let temp;

for(let i=0; i<combination.length; i++){
    for(let j=combination.length-1; j>0; j--){
        temp = combination[j];        
        combination[j] = combination[i];
        combination[i] = temp;
        console.log("combination: ",combination.join(''))
    }
}


