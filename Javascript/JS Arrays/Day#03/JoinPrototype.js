const fruits = ["Apple", "Mango", "Peach", "Gauva"];
// const fruits = ["Apple", "Mango"];

Array.prototype.myJoin = function(str){
    // for (let i = 0; i < this.length-1; i++) {
    //     let arg = str === undefined?
    //     this[i+1] = `${this[i]},${this[i+1]}`:
    //     this[i+1] = `${this[i]}${str}${this[i+1]}`;
    // }
    // return this[this.length-1];
    
    const myArr = structuredClone(this);
    for (let i = 0; i < myArr.length-1; i++) {
        let arg = str === undefined?
        myArr[i+1] = `${myArr[i]},${myArr[i+1]}`:
        myArr[i+1] = `${myArr[i]}${str}${myArr[i+1]}`;
    }
    return myArr[myArr.length-1];
}

console.log(fruits.myJoin());
console.log(fruits.myJoin(" and "));