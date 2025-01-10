// "use strict";

// console.log(this);

// (function (){
//     // this value depends on strict and non strict mode
//     console.log(this);
// })()

// const student = {
//     name: "Hassaan",
//     printName: function(){
//         console.log(this.name);
//     }
// }

// const student2 = {
//     name: "Ammar"
// }

// student.printName();
// student.printName.call(student2);

const person = {
    firstName: "Hassaan",
    lastName: "Adil",
    fullName: function(city, country){
        // console.log(`${this.firstName} ${this.lastName} from ${city}, ${country}`);
        console.log(`${this.firstName} ${this.lastName}`);
        
    }
}

const person2 = {
    firstName: "Ammar",
    lastName: "Rizwan"
}

// person.fullName.apply(person2, ["Lahore", "Pakistan"])
const fullname = person.fullName.bind(person2);
fullname();

// function a(){
//     console.log(this);
    
// }
// a();