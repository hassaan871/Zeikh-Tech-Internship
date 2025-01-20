/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (s) {
//     s = s.toLowerCase();
//     const newS = [];
//     let skip = false;

//     const nonAplhaNumericCharacters = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '{', '|', '}', '~'];
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < nonAplhaNumericCharacters.length; j++) {
//             if(s[i] === nonAplhaNumericCharacters[j]){
//                 skip = true;
//                 break;
//             }
//         }
//         if(skip === true){
//             continue;
//         }
//         newS.push(s[i]);
//     }
//     const reverseS = s.split('').reverse().join();
//     newS=newS.join();
//     console.log("newS: ",newS);
//     console.log("reverseS: ", reverseS);

//     if(newS === reverseS){
//         return true;
//     }
//     return false;
// };

var isPalindrome = function (s) {
    let str = "";
    let reverseStr;
    const alphaNumeric = [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z', '0',
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9'
    ];

    s = s.toLowerCase();

    for (let i = 0; i < s.length; i++) {
        for(let j = 0; j < alphaNumeric.length; j++){
            if(s[i] === alphaNumeric[j]){
                str = str + s[i];
            }
        }
    }

    reverseStr = str.split("").reverse().join("");

    // console.log("str: ",str);
    // console.log("reverseStr: ",reverseStr);

    if (str === reverseStr) {
        return true;
    }

    return false;

}

const s = "A man, a plan, a canal: Panama";
const result = isPalindrome(s);

console.log(result);

