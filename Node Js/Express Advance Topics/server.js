const express = require('express');
const getAllUsers = require('./controller/getAllUsers');
const validateUser = require('./middlewares/validateUser');
const addUser = require('./controller/addUser');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/api/users/', getAllUsers);

app.post('/api/users/', validateUser, addUser);

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
});