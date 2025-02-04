const {validateUser, validateLoginUser} = require('../validations/validateUser');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    req.user = user;
    next();
}

function auth(req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send("Access denied. No token provided!");

    try{
        const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        req.user = decoded;
        next();
    }catch(exp){
        return res.status(400).send("Invalid Token");
    }


}

module.exports = {
    validateUserMiddleware,
    registeredUserMiddleware,
    validateLoginUserMiddleware,
    invalidUserMiddleware,
    auth
}