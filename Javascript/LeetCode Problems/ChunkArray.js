
var chunk = function (arr, size) {
    if (arr.length === 0) { return arr; }

    let i = 0;
    let firstArr = [];

    while (i < arr.length) {
        let miniArr = [];

        for (let j = 0; j < size; j++) {
            miniArr.push(arr[i++]);

            if (i >= arr.length) break
        }

        firstArr.push(miniArr);
    }

    return firstArr;
};

const size = 3;
const arr = [1, 2, 3, 4, 5];
const result = chunk(arr, size);

console.log(result);



/*
    Pseudo code:
    *Base Case-> if empty array return empty array.

    *first empty array to be returned.
    *second mini array of size.
        push array in order to mini array.
        push the mini array to first array.
        clear the mini array.
    repeat until the end of the arr.
    return the first array.
*/