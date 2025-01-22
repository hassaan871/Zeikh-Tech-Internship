const { log } = require('console');
const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

log("totalMemory: ",totalMemory);
log("freeMemory: ",freeMemory);


/*

// const { log } = require('console');
const logger = require('./logger');
const path = require('path');

// console.log(logger);

// console.log("message");

const pathObj = path.parse(__filename);
// log(pathObj);
console.log("filename: ",__filename);
console.log(pathObj);

*/

