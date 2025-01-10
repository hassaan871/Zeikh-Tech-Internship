function firstAsyncFunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("firstAsyncFunction")
        }, 1000);
    })
}

function secondAsyncFunction(params) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`${params}, SecondAsyncFunction.`)
        }, 2000);
    })
}

function thirdAsyncFunction(params) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`${params} anddd thirdAsyncFunction.`)
        }, 3000);
    })
}

firstAsyncFunction()
.then(function(result) {
    console.log(result);
    return secondAsyncFunction(result)
})
.then(function(result) {
    console.log(result);
    return thirdAsyncFunction(result)
})
.then(function(result){
    console.log(result);
    
})

