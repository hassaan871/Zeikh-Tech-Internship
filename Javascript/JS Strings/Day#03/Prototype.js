// Javascript String prototype

function Intern(name, exp, stack){
    this.name = name;
    this.exp = exp;
    this.stack = stack;
}

Intern.prototype.company = "Zeikh Technologies";

const newIntern = new Intern("Hassaan", '1 month', 'NodeJs');

console.log(newIntern);

console.log(newIntern.company);

newIntern.company = "Zeikh Tech";

console.log(newIntern.company);

const newIntern1 = new Intern("Abdul Rehman", '6 months', 'ReactJs');

console.log(newIntern1.company);

console.log(typeof Intern);

