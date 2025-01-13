const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    }, 2000)
})

// const addTwoPromises = (promise1, promise2) => {
//     let num1, num2;
//     promise1.then((x) => {
//         num1 = x;
//         // console.log(num1);
//         // console.log(typeof num1);
//         console.log("p1 Resolved");

//     })
//         .then(() => {
//             promise2
//                 .then((y) => {
//                     num2 = y;
//                     // console.log(num2);
//                     // console.log(typeof num2);
//                     console.log("p2 Resolved");

//                 })
//                 .then(() => {
//                     return new Promise((resolve, reject) => {
//                         resolve(num1 + num2)
//                         console.log("Returned Resolved");

//                     })
//                 })

// )

const addTwoPromises = (p1, p2) => {
    return new Promise(async (resolve) => {

        // let num1, num2;
        const [num1,num2] = await Promise.all(p1,p2)
        resolve(num1,num2)
        p1
            .then((x) => {
                p2
                    .then((y) => {
                        resolve(x + y)

                    })
            })
        // p1
        //     .then((x) => {
        //         if (num2 !== undefined) resolve(x + num2)
        //         num1 = x
        //     })
        // p2
        //     .then((y) => {
        //         if (num1 !== undefined) resolve(num1 + y)
        //         num2 = y

        //     })
    })
}

// console.log(addTwoPromises(p1, p2));
addTwoPromises(p1, p2).then((x) => {
    console.log(x);
});