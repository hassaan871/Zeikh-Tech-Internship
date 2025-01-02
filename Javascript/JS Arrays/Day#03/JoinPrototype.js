const fruits = ["Apple", "Mango", "Peach", "Gauva"];

Array.prototype.myJoin = function(seperator = ","){
    let str = ""
    const len = this.length
    for (let index = 0; index < len; index++) {
        const element = this[index];
        str+=element.toString()
        if(index < len - 1) str += seperator
    }

    return str;
}

console.log(fruits.myJoin());
console.log(fruits.myJoin(" and "));
console.log([1,2,"dsfsd",true,1.324324, {sdsd:"sdad"},[2,4]].join());
console.log([1,2,"dsfsd",true,1.324324, {sdsd:"sdad"},[2,4]].join(" and "));
console.log([1,2,"dsfsd",true,1.324324, {sdsd:"sdad"},[2,4]].myJoin());
console.log([1,2,"dsfsd",true,1.324324, {sdsd:"sdad"},[2,4]].myJoin(" and "));
