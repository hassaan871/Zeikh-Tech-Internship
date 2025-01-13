const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve("P1 Success")
        reject("P1 Rejected")
    },1000);
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve("P2 Success")
        reject("P2 Rejected")
    },2000);
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve("P3 Success")
        reject("P3 Rejected")
    },5000);
})

async function funcToCall() {
    try {
        // const result = await Promise.all([p1, p2, p3]);
        // const result = await Promise.allSettled([p1, p2, p3]);
        // const result = await Promise.race([p1, p2, p3]);
        const result = await Promise.any([p1, p2, p3]);
        console.log(result);
    } catch (error) {
        console.error("Error: ",error);
    }
}

funcToCall();
// console.log(funcCall());
