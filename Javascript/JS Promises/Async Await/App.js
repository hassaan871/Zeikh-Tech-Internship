/*
*What is async?
*What is await?
*How async await works behind the scene?
*Async await vs Promise .then/ .catch
*/


// async function always returns a promise 
// async function Name() {
//     return "Hassaan";
// }

// const name = Name();
// console.log(name);
// console.log(typeof name);


// function prms() {
//     return new Promise(function (resolve, reject){
//         setTimeout(function (){
//             resolve("Hassaan")
//         }, 2000);
//     })
// }

const myName =  new Promise(function (resolve, reject){
    setTimeout(function (){
        resolve("Hassaan")
    }, 2000);
})

async function callPrmsAsync() {
    const name = await myName;
    console.log(name);
}

function callPrms() {
    const name = myName;
    console.log(name);
}

callPrmsAsync();
callPrms();