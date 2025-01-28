/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n) {

// };

const isValid = function (s) {
    let temp;
    const stack = [];

    if (s[0] === ")") {
        return false;
    }
    if (s.length % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
            continue;
        }
        if (s[i] === ")") {
            if (stack.length === 0) {
                return false;
            }
            temp = stack.pop();

            if (temp === "(" && s[i] !== ")") {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};

// const unique = function (arr) {
//     const output = [arr[0]];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < output.length; j++) {
//             if (j === output.length - 1) {
//                 output.push(arr[i]);
//             }
//             if (output[i] === arr[j]) {
//                 continue;
//             }
//         }
//     }
//     return output;
// }

let opening = '(((';
let closing = ')))';
const output = [];
let combination = opening + closing;
combination = combination.split('');
let count = 1;

let temp;

for (let i = 0; i < combination.length; i++) {
    for (let j = combination.length - 1; j > 0; j--) {
        temp = combination[j];
        combination[j] = combination[i];
        combination[i] = temp;
        console.log("combination: ",combination.join(''));
        console.log("count: ", count);
        count++;

        if (isValid(combination.join(''))) {
            output.push(combination.join(''));
        }
    }
    // temp = combination[0];
    // combination[0] = combination[i];
    // combination[i] = temp;

    // if (isValid(combination.join(''))) {
    //     output.push(combination.join(''));
    // }
}
// for (let i = 0; i < combination.length; i++) {
//     for (let j = combination.length - 1; j > 0; j--) {
//         temp = combination[i];
//         combination[i] = combination[j];
//         combination[j] = temp;
//         console.log("combination: ",combination.join(''));
//         if (isValid(combination.join(''))) {
//             output.push(combination.join(''));
//         }
//     }
// }



console.log("Output: ", output);

// console.log("Output: ", unique([2, 3, 3, 11, 1, 4, 5, 4, 4, 7, 7]));



