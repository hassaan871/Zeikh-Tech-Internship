const friends = {
    friend01: {
        name:"hassaan",
        company:"Zeikh Tech"
    },
    friend02: {
        name:"Ayan",
        company:"Cogentro"
    },
    friend03: {
        name:"Njm",
        company:"Xnerds"
    }
}

const friendsList = Object.entries(friends);

for (const element of friendsList) {
    console.log(`${element[0]}: ${element[1].name}, ${element[1].company}`);
    
}
// for (const [key, value] of friendsList) {
//     console.log(`${key}: ${value.name}, ${value.company}`);
    
// }

// for (const [key, value] of friendsList) {
//     console.log(`${key}: ${value}`);
    
// }

const person = {
    name: "hassaan",
    intern: true,
    sports: ["volleyball", "basketball"],
    
}

// const friends = {
//     friend01: "hassaan",
//     friend02: "Ayan",
//     friend03: "Njm",
//     friend04: "Faraz",
//     friend05: "Hadi",
//     friend06: "zain",
//     friend07: "Ali",
//     friend07: "Farhan",
// }



// console.log(Object.entries(friends));
// console.log(Object.entries(person));
