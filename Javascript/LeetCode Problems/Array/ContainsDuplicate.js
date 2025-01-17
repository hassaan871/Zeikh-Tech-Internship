/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i !== j) {
                return true;
            }
        }
    }

    return false;
};

const nums = [1,2,3,1];
// const nums = [1, 2, 3];
const result = containsDuplicate(nums);

console.log(result);
