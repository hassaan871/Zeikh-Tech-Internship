// function Sum(){
//     // console.log(arguments);
//     // console.log(typeof arguments);
//     let sum = 0;
//     for (const key in arguments) {
//         sum+=arguments[key];
//         }
//     console.log(sum);
//     return sum;
//     }



// Sum();
// Sum(2,3);

// function Sum(name, ...args){ //Rest operator must be the last formal parameter.
//     let sum = 0;
//     for (const key in args) {
//        sum += args[key];
//     }
//     console.log("Name: ",name);
//     console.log("Sum: ",sum);
    
// }
// Sum("Hassaan",1,2,3,4);

function fn(...args){
    console.log(args);
}

const arr = [[1,2,3],[4,5,6]];
fn(...arr);

