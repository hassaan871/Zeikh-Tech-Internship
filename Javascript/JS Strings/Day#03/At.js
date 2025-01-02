const intern = "Hasssaan";
const character = intern.at(0);
console.log(`character00: ${character}`);

console.log(`TypeOf: ${typeof intern}`);

const character01 = intern[1];
console.log(`character[1]: ${character01}`);

const character05 = intern[-1];
console.log(`character[-1]: ${character05}`);

const character02 = intern.at();
console.log(`character(): ${character02}`);

const character03 = intern.at(-1);
console.log(`characterAt: -1: ${character03}`);

const character04 = intern.at(-2);
console.log(`characterAt: -2: ${character04}`);