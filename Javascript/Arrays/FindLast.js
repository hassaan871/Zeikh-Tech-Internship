const nums = [74, 61, 94, 98, 78, 85, 55];

const checkAge = (age) => age>=18;

const last = nums.findLast(checkAge);

console.log(last);