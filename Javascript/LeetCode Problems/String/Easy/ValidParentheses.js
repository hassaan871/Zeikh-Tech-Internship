/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let temp;
    const stack = [];

    if(s[0] === ")" || s[0] === "]" || s[0] === "}" ){
         return false;
    }
    if(s.length%2 !== 0){
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "[" || s[i] === "{" ){ 
            stack.push(s[i]);
            continue;
        }
        if(s[i] === ")" || s[i] === "]" || s[i] === "}" ){
            if(stack.length === 0){
                return false;
            }
            temp = stack.pop();
                       
            if(temp === "(" && s[i] !== ")"){
                return false;
            }else if(temp === "[" && s[i] !== "]"){
                return false;
            }else if(temp === "{" && s[i] !== "}"){
                return false;
            }
        }        
    }
    if(stack.length>0){
        return false;
    }
   return true;
};

const s = "{[()]}";
// const s = "(]";
// const s = "()";
// const s = "{[()}";
// const s = "){}";
const result = isValid(s);
console.log(result);
