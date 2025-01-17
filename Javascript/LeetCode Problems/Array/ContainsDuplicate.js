/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort((x,y)=> x-y)
    let result = false;

    nums.forEach((element, index)=>{
        if(element === nums[index+1]){
            result = true;
        }
    })

    return result;
};

const nums = [1,2,3,1];
// const nums = [1, 2, 3];
const result = containsDuplicate(nums);

console.log(result);
