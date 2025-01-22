// var a=; //Tried to see module wrapper function.

console.log("File name: ",__filename);
console.log("Directory name: ",__dirname);

const url = 'https://api.github.com/users/hassaan871';

function log(message){
    console.log(message);
}

module.exports.log = log;
// module.exports = log;