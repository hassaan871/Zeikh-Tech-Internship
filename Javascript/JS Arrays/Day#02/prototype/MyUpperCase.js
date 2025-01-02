// Prototype Function
Array.prototype.MyUpperCase = function() {
    for(let i=0; i<this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}

let fruits = ["Apple", "Mango"];
fruits.MyUpperCase();
// console.log(fruits);

// Prototype Property
function Person(firstName, lastName, age, gender, eyecolor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.eyecolor = eyecolor;
}

Person.prototype.height = "6ft";
const person  = new Person("abc", "bcd", 22, "male", "black");
console.log(person);
console.log(person.height);

