const fruits = ["Banana", "Orange", "Apple","Mango"];
let text = fruits.constructor; // Constructor property returns the function that created the array.

console.log(text);

function Person(name, age){
    this.name = name;
    this.age = age;

}

const person1 = new Person("hassaan", 22);
console.log(person1);
console.log(new Person("Ayan",22));


