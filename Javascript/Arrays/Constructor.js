const fruits = ["Banana", "Orange", "Apple","Mango"];
let text = fruits.constructor; // Constructor property returns the function that created the array.

// console.log(text);

function Person(name, age){
    this.name = name;
    this.age = age;

    return this.name + this.age;
}

const person1 = new Person("hassan", 22);
console.log(person1);
console.log(Person("Ayan",22));


