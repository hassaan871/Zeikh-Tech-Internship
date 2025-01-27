/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let evenSum = parseInt(num[0]);
    let oddSum = 0;

    for(let i = 1; i<num.length; i++){
        if(i%2 === 0){
            evenSum = evenSum + parseInt(num[i]);
            continue;
        }
        oddSum = oddSum + parseInt(num[i]);
    }  
    
    if(evenSum === oddSum) return true;

    return false;
};

let num = "24123";

const result = isBalanced(num);
console.log(result);
