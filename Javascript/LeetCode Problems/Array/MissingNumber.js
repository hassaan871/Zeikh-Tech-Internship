/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const seen = nums.reduce((acc,curr) => {
        acc[curr] = true
        return acc
    }, {});

    
    for (let num = 0; num <= nums.length; num++) {
        if(!seen[num]) return num
    }

//     let temp;
//     for(let i=0; i<nums.length; i++){
//         for(let j=0; j<nums.length; j++){
//             if(nums[i]<nums[j]){
//                 temp = nums[i];
//                 nums[i] = nums[j];
//                 nums[j] = temp;
//             }
//         }
//     }
//   for(let i=0; i<nums.length; i++){
//     if(i === nums[i]) continue;
//     return i;
//   } 
//   return nums.length;
};

let nums = [9,6,4,2,3,5,7,0,1];
nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];
const output = missingNumber(nums);
console.log(output);