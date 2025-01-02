const char = '';
const charArr = [];
let name = "Hassaan";
// console.log(name.charCodeAt(0));

console.log("\nUnicode: ");
for (let index = 0; index < name.length; index++) {
    charArr[index] = name.charCodeAt(index);   
    console.log(charArr[index]);
     
}
// console.log(charArr.length);

console.log("\nWord: ");
for (let index = 0; index < charArr.length; index++) {
    console.log(String.fromCharCode(charArr[index]));
    
}
