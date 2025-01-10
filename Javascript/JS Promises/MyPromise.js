// function myPromise() {
//     const pr = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             // const success = true;
//             const success = false;
//             const successStr = "Promise Succeed/Resolved.";
//             const failedStr = "Promise Failed/Rejected.";

//             if (success) {
//                 resolve(successStr);
//             } else {
//                 reject(failedStr);
//             }
//         }, 1000);
//     })

//     return pr;
// }

// const result = myPromise();

// result
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (result) {
//         console.log(result);
//     });

// console.log(typeof result);
// console.log(result);

function MyPromise(data) {
    return new Promise(function (resolve, reject) {
        if (data) {
            resolve(true)
        } else {
            reject(false);
        }
    })
}

// const arg = true;
const arg = false;

MyPromise(arg)
    .then(function (data) {
        console.log(data);
        return true;
    })
    .catch(function (data) {
        console.log(data);
        return false;
    })
    .then(function (data) {
        console.log(data);
        return true;
    })
    .catch(function (data) {
        console.log(data);
        return false;
    })