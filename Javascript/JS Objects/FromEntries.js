// const arr = [["number",100],["pay",20000]];
// const arr = [["number",["true", "false"]],["pay",20000]];
const arr = [["number",{"true": "false"}],["pay",20000]];

const obj = Object.fromEntries(arr);

console.log(obj);
