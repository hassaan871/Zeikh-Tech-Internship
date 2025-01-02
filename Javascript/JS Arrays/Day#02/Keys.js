const alphabets = ["a", "b", "c", "d", "e", "f"];
const result = alphabets.keys();
console.log(`result: ${result}`);
console.log(`typeof result: ${typeof result}`);


const denseKeys = [...alphabets.keys()];
console.log(`denseKeys: ${denseKeys}`);
console.log(`type of denseKeys: ${typeof denseKeys}`);


let text = "";
for(let key of result){
    // console.log(key);
}

// for(let [key, value] of result){
//     console.log(`key: ${key}, value: ${value}`);    
// }

