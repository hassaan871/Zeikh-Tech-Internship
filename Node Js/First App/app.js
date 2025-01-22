// const { log } = require('console');
const logger = require('./logger');
const path = require('path');

// console.log(logger);

// console.log("message");

const pathObj = path.parse(__filename);
// log(pathObj);
console.log("filename: ",__filename);
console.log(pathObj);