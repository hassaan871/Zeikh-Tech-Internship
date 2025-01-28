const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 8000;

connectDB();

//Built-in Express Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});