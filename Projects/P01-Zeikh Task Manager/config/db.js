const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/P01-Zeikh-Task-Manager');
        console.log(`MongoDB Connected ...`);

    } catch (err) {
        console.log(`Error while connecting mongodb: ${err}`);
    }
}

module.exports = connectDB;