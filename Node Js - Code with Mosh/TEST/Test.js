const bcrypt = require('bcrypt');

const run = async () =>{
    const salt = await bcrypt.genSalt(10);
    const salt01 = await bcrypt.genSalt(10);
    console.log("salt: ",salt);
    console.log("salt01: ",salt01);

    const hashed = await bcrypt.hash('1234', salt);
    console.log("hashed: ",hashed);
    
}

run();