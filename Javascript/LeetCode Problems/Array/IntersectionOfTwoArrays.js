// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// const intersection = function(nums1, nums2) {
//     const intersection = [];
//     for(let i=0; i<nums1.length; i++){
//         for(let j=0; j<nums2.length; j++){
//             if(nums1[i] === nums2[j]){
//                 intersection.push(nums1[i]);
//             }
//         }
//     }
//     return removeDuplicate(intersection);
// };

// const removeDuplicate = function (nums) {
//     let unique = new Set(nums);
//     return [...unique];
// }

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
    const seen = {}
    const added = {}
    const intersection = [];

    for (const num1 of nums1) seen[num1] = 1

    console.log(seen);
    

    for (const num2 of nums2) {
        if (seen[num2]) {
            seen[num2] = 0
            intersection.push(num2)
        }
    }

    return intersection

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j] && !added[nums1]) {
                added[nums1] = true
                intersection.push(nums1[i]);
            }
        }
    }

    return (intersection);
};



const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
// const nums1 = [4, 9, 5];
// const nums2 = [9, 4, 9, 8, 4]

const result = intersection(nums1, nums2);
console.log(result);
