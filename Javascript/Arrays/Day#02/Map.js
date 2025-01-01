// const arr = [4, 9, 16, 25, 36, 49, 64, 81, 100];
// const sqrtOfArr = arr.map(Math.sqrt);
// console.log(`typeof sqrtOfArr: ${typeof arr}`);
// console.log(`sqrtOfArr: ${typeof sqrtOfArr}`);

const arr1 = new Array([4, 9, 16]);
const arr = [4, 9, 16];
console.log(`typeOf arr1: ${typeof arr1}`);
console.log(`typeOf arr: ${typeof arr}`);

// const sqrtOfArr = arr.map(Math.sqrt);
// console.log(`typeof sqrtOfArr: ${typeof arr}`);
// console.log(`sqrtOfArr: ${typeof sqrtOfArr}`);

const tenX = (num) => num*10;

const result = arr.map(tenX);

console.log(result);

const tenXArr1 = (num) => num*10;

const result1 = arr.map(tenX);

console.log(result1);
// console.log(typeof result);

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

// console.log(newArr);
