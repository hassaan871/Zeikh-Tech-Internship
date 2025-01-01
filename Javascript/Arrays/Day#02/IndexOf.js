const fruits = ["Banana", "Orange","Apple","Orange", "PineApple","Apple", "Mango"];
const index = fruits.indexOf("Apple");
const index1 = fruits.indexOf("Apple",1);
const index2 = fruits.indexOf("Apple",2);
// computed index = length of array + fromIndex = 6+(-2)=4 false
const index3 = fruits.indexOf("Apple",-2);

console.log(`index: ${index}`);
// console.log(index1);
// console.log(index2);

console.log(`index3: ${index3}`);
