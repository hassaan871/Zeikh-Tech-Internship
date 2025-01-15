// "use strict";

// console.log(this);

function x(){
    console.log(this)
}

// x();
// window.x();
// console.log(window);


const obj = {
    a: 10,
    x: function(){
        console.log("Normal Function: ",this);
    },
    y: ()=>{
        console.log("Arrow Function: ",this);
    }
}

obj.x();
obj.y();



const student1 = {
    name: "Hassaan",
    printName: function(){
        console.log(this.name);
    }
}

const student2 = {
    name: "Ayan"
}

// student1.printName();
// student1.printName.call(student2);