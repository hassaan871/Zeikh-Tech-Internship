// const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const arr = [10, 100, 1000]; //Hassaan's array

// console.log(arr.map((value) => (value > 4 ? value * 4 : undefined)));

// does not modifies the original array
// manupulation can be done with function called inside it

Array.prototype.myMap = function (callbackfn) {
  const newArr = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];

    // console.log(callbackfn(element));
    newArr.push(callbackfn(element, index, this));
    // newArr[index] = callbackfn(element, index, this);

    // for (let i = 0; i < this.length; i++) {
    //     const element = array[i];
        
    // }
  }
  return newArr;
};

console.log(arr.myMap((element) => element * 2));