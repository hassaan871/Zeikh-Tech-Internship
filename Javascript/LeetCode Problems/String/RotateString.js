// let str = "bcdea";
// let s2 = str.split("").sort().join("");
// console.log(s2);

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {

    let strS = structuredClone(s);
    let strGoal = structuredClone(goal);
    let s1 = strS.split("").sort().join("");
    let s2 = strGoal.split("").sort().join("");

    if (s1 === s2 ) {
        return true
    } 

    return false;
};

// const s = "abcde";
// const goal = "cdeab";

const s = "abcdef";
const goal = "cdeab";
const result = rotateString(s, goal);

console.log(result);
