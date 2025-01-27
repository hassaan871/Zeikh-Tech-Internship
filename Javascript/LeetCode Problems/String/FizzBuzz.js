/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let output = [];
    for(let i = 1; i<=n; i++){
        if(i%3===0 && i%5===0){
            output.push("FizzBuzz");
            continue;
        } 

        if(i%3 === 0){
            output.push("Fizz");
            continue;
        }

        if(i%5 === 0){
            output.push("Buzz");
            continue;
        }

        output.push(i.toString());
    }

    return output;
};

let n = 5;
n=15;
const result = fizzBuzz(n);
console.log(result);
