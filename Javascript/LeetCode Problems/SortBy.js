
var sortBy = function (arr, fn) {
    return arr.toSorted((a, b) => fn(a) - fn(b))
};

// let arr = [5, 4, 1, 2, 3];
let arr = [{"x": 1}, {"x": 0},{"x": -1}];
// let arr = [[3, 4], [5, 2], [10, 1]];

// const fn = (x) => x;
const fn = (x) => x.x
// const fn = (x) => x[1]


console.log(sortBy(arr, fn));