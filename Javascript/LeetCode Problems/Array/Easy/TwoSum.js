/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     // for(let i=0; i<nums.length-1; i++){
//     //     for(let j=1; j<nums.length; j++){
//     //         if(i == j) continue;
//     //         if ((nums[i] + nums[j]) === target) {
//     //            return [i,j]; 
//     //         }
//     //     }
//     // }

//     let result = [];

//     nums.forEach((num1, index1)=>{
//         nums.forEach((num2, index2)=>{
//             if((index1 !== index2) && ((num1+num2) === target)){
//                 console.log("Inside nested for each If...");
//                 result[0] = index1;
//                 result[1] = index2;
//             } 
//         })
//     })

//     return result;
// };

var twoSum = function (nums, target) {
    const seen = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (seen[diff] !== undefined) return [seen[diff], i]

        seen[nums[i]] = i

        console.log(seen);
        
    }
}

let nums = [2, 7, 11, 15];
let target = 9;

const result = twoSum(nums, target);
console.log(result);