// var a=; //Tried to see module wrapper function.



const url = 'https://api.github.com/users/hassaan871';

function log(message) {
    console.log(message);
    console.log("File name: ", __filename);
    console.log("Directory name: ", __dirname);
}

module.exports.log = log;
// module.exports = log;