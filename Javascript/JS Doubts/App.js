const p1 = () =>  new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("P1");
        
        resolve("Pp1")
    }, 10000)
})

const p2 = () =>  new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("P2");

        resolve("Pp2")
    }, 5000)
})

const Test = async (p1, p2) => {
    await Promise.all([p1(),p2()]);

    // if (p0 === "P2") {
    //    const a =  await p1();
    //    console.log(a);
       
    //    if(a==="Pp1")
    //    {

    //        const b =  await p2();
    //        console.log(b);
    //     }

    // }
    console.log("sdds");
}
Test(p1, p2);
