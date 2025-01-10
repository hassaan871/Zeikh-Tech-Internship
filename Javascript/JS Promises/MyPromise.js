function myPromise() {
    const pr = new Promise(function (resolve, reject) {
        setTimeout(function(){

            // const success = true;
            const success = false;
            const successStr = "Promise Succeed/Resolved.";
            const failedStr = "Promise Failed/Rejected.";

            if(success){
                resolve(successStr);
            }else{
                reject(failedStr);
            }
        },1000);
    })

    return pr;
}

myPromise()
    .then(function(result){
        console.log(result);
    })
    .catch(function(result){
        console.log(result);
    });