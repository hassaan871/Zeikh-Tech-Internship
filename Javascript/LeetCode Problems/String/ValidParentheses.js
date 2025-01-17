/**
 * @param {string} s
 * @return {boolean}
 */

// We have to use Stack for this 
// I will do it Later.

var isValid = function(s) {
    if((s.length === 1)) { return false };
    for (let index = 0; index < s.length-1; index++) {
        if((s[index] === '(') && (s[index+1] === ')')){ continue; }
        else if((s[index] === ')') && (s[index-1] === ')')){ continue; }
        if((s[index] === '[') && (s[index+1] === ']')){ continue; }
        else if((s[index] === ']') && (s[index-1] === '[')){ continue; }
        if((s[index] === '{') && (s[index+1] === '}')){ continue; }
        else if((s[index] === '}') && (s[index-1] === '{')){ continue; } 
    }
    
    return true;
};

// const s = "()[]{}";
const s = "(]";
// const s = "]";
const result = isValid(s);
console.log(result);
