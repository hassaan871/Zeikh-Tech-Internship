// const bcrypt = require('bcrypt');

// const run = async () =>{
//     const salt = await bcrypt.genSalt(10);
//     const salt01 = await bcrypt.genSalt(10);
//     console.log("salt: ",salt);
//     console.log("salt01: ",salt01);

//     const hashed = await bcrypt.hash('1234', salt);
//     console.log("hashed: ",hashed);
    
// }

// run();

const crypto = require('crypto');
const randomBuffer = crypto.randomBytes(4);

console.log('randomBuffer: ',randomBuffer);


// Converting with 'hex'
const hexString = randomBuffer.toString('hex');
console.log('Hex:', hexString); // e.g., "4a2f9b1c"

// Converting without specifying encoding (defaults to UTF-8)
const utf8String = randomBuffer.toString();
console.log('UTF-8:', utf8String); // May output unreadable characters or unexpected symbols
