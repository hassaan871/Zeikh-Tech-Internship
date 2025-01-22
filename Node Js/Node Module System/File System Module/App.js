const fs = require('fs');

const files = fs.readdirSync('../');

fs.readdir('../',function (err, files){
    if(err) console.log("Error: ", err);
    else console.log("Files: ", files);
});

console.log("Files readfilesSync: ",files);