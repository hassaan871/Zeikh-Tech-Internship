var once = function(fn) {
    // const output = [
    //     {
    //         "calls":0,
    //         "value":null
    //     }
    // ];
    return function(...args){
        openedArr = args[0][0];
        // console.log(args);
        return fn(openedArr[0],openedArr[1],openedArr[2])
        }
};

const fn = (a,b,c) => {
     return a+b+c;
};
const calls = [[1,2,3],[2,3,6]];

const result = once(fn);
// result(calls);
console.log(result(calls));




/*
Testing
*/

// function fn(...args){
//     console.log(args);
// }
// fn([1,2,3])
