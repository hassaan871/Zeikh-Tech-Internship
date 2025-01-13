const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P1 Success")
    },3000);
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P2 Success")
    },3000);
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P3 Success")
    },3000);
})

async function funcCall() {
    const result = await Promise.all([p1, p2, p3]);
    console.log(result);
}

funcCall();
// console.log(funcCall());
