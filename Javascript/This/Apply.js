const person = {
    greet: function(city, country){
        console.log(`Hello, ${this.firstName} ${this.lastName} from ${city} ${country}`);
    }
}

const personName = {
    firstName:"Hassaan",
    lastName: "Adil"
}

// person.greet.apply(personName,["Lahore", "Pakistan"]);
person.greet.apply(personName,["Tokyo", "Japan"]);
