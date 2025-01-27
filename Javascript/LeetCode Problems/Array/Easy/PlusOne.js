/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    for (let i = digits.length-1; i >= 0; i--) {
        if(digits[i] < 9){
            digits[i] = digits[i]+1;
            return digits;
        }else if(digits[i] === 9 && i === 0){
            for (let index = digits.length; index >= 0; index--) {
                digits[index] = digits[index-1];
                if(index === 0){
                    digits[index] = 1;
                    digits[index+1] = 0;
                }
            }
        }else if (digits[i] === 9) {
            digits[i] = 0;
            continue;
        }

    }
    return digits;
};

const digits = [9];
const result = plusOne(digits);

console.log(result);