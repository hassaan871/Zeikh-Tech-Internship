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
    }, 4000);
})

// const myName2 =  new Promise(function (resolve, reject){
//     setTimeout(function (){
//         resolve("Hass...")
//     }, 4000);
// })

const cast =  new Promise(function (resolve, reject){
    setTimeout(function (){
        resolve("RJ")
    // }, 1000);
    }, 10000);
})

async function callPrmsAsync() {
    console.log("Before Await...");

    const name = await myName;
    console.log("First Promise Resolved");
    console.log(name);

    // const name2 = await myName;
    // console.log("Second Promise Resolved");
    // console.log(name2);

    const myCast = await cast;
    console.log("Second Promise Resolved");
    console.log(myCast);
}

function Testing() {
    console.log("Testing...");
}

function callPrms() {
    const name = myName;
    console.log("Promise Not Resolved");
    console.log(name);
}

callPrmsAsync();
// callPrms();
Testing();


