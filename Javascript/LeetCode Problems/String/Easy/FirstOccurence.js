/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let temp;
    let index = -1;
    const startNeedle = needle[0];
    const needleLength = needle.length;

    for(let i=0; i<haystack.length; i++){
        if(startNeedle === haystack[i]){            
            temp = haystack.substring(i, i+needleLength);
            if(needle === temp){
                index = i;
                return index;
            }
        }
    }
    return index;
};

const haystack = "sadbutsad";
const needle = "sad";

const result = strStr(haystack, needle);
console.log(result);
