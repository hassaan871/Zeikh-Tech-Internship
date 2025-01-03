const obj1 = {};

// Object.defineProperties(obj1, {
//     name:"abc",
//     exp: [
//         {
//         company: "Luds",
//         years:1.5
//     },
//     {
//         company: "Invozone",
//         years:3
//     }
// ]
// })

Object.defineProperties(obj1, {
    Property1:{
        value: 42,
        writable: true
    },
    Property2:{}
});

console.log(obj1);
console.log(obj1.Property1);
