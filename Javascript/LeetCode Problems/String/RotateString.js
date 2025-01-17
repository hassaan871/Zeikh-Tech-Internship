// let str = "bcdea";
// let s2 = str.split("").sort().join("");
// console.log(s2);

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s === goal){
        console.log("In If Statement");
        return true;
    }
    for(let i = 0; i<goal.length; i++){
        goal = goal.split("");
        goal.unshift(goal[goal.length-1]);
        goal.pop();
        goal = goal.join("");       
        
        if(s === goal){
            return true;
        }
    }

    return false;
};

// const s = "abcde";
// // const goal = "abcde";
// const goal = "cdeab";

let s = "abcdef";
let goal = "cdeab";
const result = rotateString(s, goal);

console.log(result);
