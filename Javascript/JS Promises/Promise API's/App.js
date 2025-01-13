const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P1 Success")
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
        resolve("P3 Success")
    },5000);
})

async function funcCall() {
    try {
        const result = await Promise.all([p1, p2, p3]);
        console.log(result);
    } catch (error) {
        console.log("Error: ",error);
    }
}

funcCall();
// console.log(funcCall());
