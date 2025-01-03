// Assign Static method 

const target = {a:1, b:2};
const source = {c:3, d:4};

const source1 = {e:5, f:6};

const source2 = {g:"5", h:true};
const source3 = {i:undefined, j:function(){
    console.log("fun");
    
}};
const source4 = {a:"Overritten", k:true};

// const returnedTarget = Object.assign(source, target);

// console.log(returnedTarget);
// console.log(target);
// console.log(source);
// const result = Object.assign(target, source);
// Object.assign(target, source, source1);
// Object.assign(target, source, source1, source2, source3);
Object.assign(target, source, source1, source2, source3, source4);

// console.log(result);
// console.log(target);
// console.log(source);


const clone = source1;
const clone1 = structuredClone(source1);

// console.log(clone);

// clone.e = "hassaan";
clone1.e = "hassaan";

// console.log(clone);
// console.log(clone1);
// console.log(source1);


const obj = new Object({name:"name_here", age:22});
// const obj = {name:"name_here", age:22};
const newObj = Object.assign({}, obj);

const obj1 = Object.create({a:1});

// console.log(newObj);
// console.log(obj);
// console.log(obj.prototype);
console.log(Object.getPrototypeOf(obj1));
// console.log(Object.prototype);
// console.log(Object.getPrototypeOf(obj));





const myObj = Object.create(null);
