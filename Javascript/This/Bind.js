const greet = {
    name: "Hassaan",
    sayHello: function(){
        console.log(`Greetings! from ${this.name}`);
    }
}

const anotherName={
    name:"Umair"
}

const tempFunc = greet.sayHello;
tempFunc(); //Output: undefined, because 'this' is not set correctly.
const result = tempFunc.bind(anotherName); //because this is bound to 'anotherName'.
result();