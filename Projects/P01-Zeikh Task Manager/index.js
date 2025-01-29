const connectDB = require('./config/db');
const dotenv = require('dotenv');
const express = require('express');
const app = express();

connectDB();
dotenv.config();
const PORT = process.env.PORT || 5000;

try {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    })
} catch (error) {
    console.log(`Error while running the server: ${error}`);
}
