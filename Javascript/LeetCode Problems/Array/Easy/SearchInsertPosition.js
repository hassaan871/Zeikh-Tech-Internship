/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let index = 0; nums[index] <= target ; index++) {
        if (nums[index] === target) {
            return index;
        }
    }
    for(let index = 0; index < nums.length; index++){
        if(nums[index] > target){
            return index;
        }
    }
    return nums.length;
}

const nums = [1, 3, 4, 5, 7, 8, 10, 14, 18, 19, 22];
const target = 9;
const result = searchInsert(nums, target);

console.log(result);
