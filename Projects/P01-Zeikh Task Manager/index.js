const userRoutes = require('./routes/user.routes');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const express = require('express');
const app = express();

connectDB();
dotenv.config();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use('/api', userRoutes);

try {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    })
} catch (error) {
    console.log(`Error while running the server: ${error}`);
}
