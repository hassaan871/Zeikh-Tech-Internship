// "use strict";

// console.log(this);

// (function (){
//     // this value depends on strict and non strict mode
//     console.log(this);
// })()

const student = {
    name: "Hassaan",
    printName: function(){
        console.log(this.name);
    }
}

const student2 = {
    name: "Ammar"
}

student.printName();
student.printName.call(student2);

// function a(){
//     console.log(this);
    
// }
// a();