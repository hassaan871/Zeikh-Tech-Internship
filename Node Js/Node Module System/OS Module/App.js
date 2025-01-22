const os = require('os');

const upTime = os.uptime();
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log("upTime: ",upTime);
console.log("totalMemory: ",totalMemory);
console.log("freeMemory: ",freeMemory);