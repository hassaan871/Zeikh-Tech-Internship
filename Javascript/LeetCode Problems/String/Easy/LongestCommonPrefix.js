/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let lcp = "";
    let shortestWordIndex;
    let shortestWordlength = strs[0].length;
    let shortestWord;
    let temp;

    // length of the shortest string in the Array. 
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortestWordlength) {
            shortestWordlength = strs[i].length;
        }
    }

    //iIndex of the shortest string in the Array. 
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length === shortestWordlength) {
            shortestWordIndex = i;
        }
    }

    shortestWord = strs[shortestWordIndex];

    // find the longest common prefix string amongst an array of strings.
    for (let i = 0; i < shortestWordlength; i++) {
        for (let j = 0; j < strs.length; j++) {
            if(shortestWord[i] === strs[j][i]){
                temp = true;
            }
            else{
                return lcp;
            }
        }
        if(temp === true){
            lcp = lcp + shortestWord[i];
        }
    }

    return lcp;
};

let strs = ["flower", "flow", "flight"];
strs = ["dog","racecar","car"];
const result = longestCommonPrefix(strs);
console.log(result);
