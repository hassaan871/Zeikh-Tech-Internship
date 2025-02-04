const mongoose = require('mongoose');

async function connectDB() {
    try{
        await mongoose.connect('mongodb://localhost/authentication');
        console.log(`Connected to Mongodb ...`);
    }catch(err){
        console.log(`Error while loading mongodb:  ${err}`);
        
    }
}

module.exports = connectDB;