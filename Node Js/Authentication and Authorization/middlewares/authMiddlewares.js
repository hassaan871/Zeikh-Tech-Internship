const {validateUser, validateLoginUser} = require('../validations/validateUser');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

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

function validateLoginUserMiddleware(req, res, next) {
    const { error } = validateLoginUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
}

async function invalidUserMiddleware(req, res, next){
    const user = await User.findOne({ email: req.body.email });
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!user || !validPassword) return res.status(400).send("Invalid email or password!");
    next();
}

module.exports = {
    validateUserMiddleware,
    registeredUserMiddleware,
    validateLoginUserMiddleware,
    invalidUserMiddleware
}