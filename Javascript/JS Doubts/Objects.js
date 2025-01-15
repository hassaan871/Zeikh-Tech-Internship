// const obj = {name:"Hassaan", age:2};
const obj = [{"x": 1},{"x": 0},{"x": -1}]
// console.log(Object.keys(obj).length);
// console.log(Object.keys(obj));
// console.log(obj);

for(let i=0; i<obj.length; i++){
    for(let j=0; j<obj.length; j++){
        if(obj[i].x<=obj[j].x){
            let c = JSON.parse(JSON.stringify(obj[i].x));
            obj[i].x = obj[j].x;
            obj[j].x = c;
        }
    }
}

console.log(obj);

