/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let temp, last;
    let newArr = [];

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            for (let k = 0; k < arr1.length; k++) {
                if (arr2[i] === arr1[k]) {
                    temp = arr1[k];
                    arr1[k] = arr1[j];
                    arr1[j] = temp;
                }
            }
        }
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[0]) {
            last = i;
            break;
        }
    }

    for(let i = 0; i<=last-1; i++){
        newArr[i] = arr1[i];
    }

    for(let i=0; i<last; i++){
        for(let j=0; j<arr1.length-1; j++){
            arr1[j] = arr1[j+1];
        }
        arr1.length = arr1.length-1;
    }

    for(let i=0; i<newArr.length; i++){
        for(let j=0; j<newArr.length; j++){
            if(newArr[i]<=newArr[j]){
                temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
        }
    }

    for(let i =0; i<newArr.length; i++){
        arr1[arr1.length] = newArr[i];
    }

    return arr1;
};

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];

// arr1 = [28,6,22,8,44,17];
// arr2 = [22,28,8,6];

const result = relativeSortArray(arr1, arr2);
console.log("result: ", result);
