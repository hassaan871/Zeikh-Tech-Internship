const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');
const adminRotues = require('./routes/admin.routes');
const connectDB = require('./config/db');
const express = require('express');
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use('/api', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/admin', adminRotues);

try {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    })
} catch (error) {
    console.log(`Error while running the server: ${error}`);
}
