/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let temp;
    let sum = "";
    let carry = 0;

    const longLength = Math.max(a.length, b.length)
    const padLength = Math.abs(a.length - b.length)

    if (a.length > b.length) {
        for (let i = 1; i <= padLength; i++)
            b = "0" + b;
    } else if (a.length < b.length) {
        for (let i = 1; i <= padLength; i++)
            a = "0" + a;
    }

    for (let i = a.length - 1; i >= 0; i--) {
        temp = parseInt(a[i]) + parseInt(b[i]) + carry;
        if (temp === 0) {
            sum = "0" + sum;
            carry = 0;

            continue;
        }
        if (temp === 1) {
            sum = "1" + sum;
            carry = 0;

            continue;
        }
        if (temp === 2 && i === 0) {
            sum = "10" + sum;
            continue;
        }
        if (temp === 2) {
            sum = "0" + sum;
            carry = 1;
            continue;
        }
        if (temp === 3 && i === 0) {
            sum = "11" + sum;
            continue;
        }
        if (temp === 3) {
            sum = "1" + sum;
            carry = 1;
            continue;
        }
    }

    return sum;
};

let a = "1010";
let b = "1011";

a = "11";
b = "1";

const result = addBinary(a, b);
console.log(result);
console.log(addBinary("100", "110010"));
