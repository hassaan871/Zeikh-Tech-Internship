const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

//Built-in Express Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Mongodb connection
mongoose.connect('mongodb://localhost/authentication')
    .then(() => { console.log('Connected to Mongodb ...') })
    .catch((err) => { console.log('Error while loading mongodb: ', err) })

//model and schema
const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        // maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        // maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        // maxlength: 1024,
    }
}));

//Joi input validation
function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(5).required()
    });
    return schema.validate(user);
}

//custom middlewares
function validateUserMiddleware(req, res, next) {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
}
async function registeredUserMiddleware(req, res, next) {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");
    next();
}

//routes
app.post('/registerUser/', validateUserMiddleware, registeredUserMiddleware, async (req, res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        await user.save();
        return res.send(user);
    });

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});