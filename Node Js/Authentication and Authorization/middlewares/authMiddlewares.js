const validateUser = require('../validations/validateUser');
const User = require('../models/userModel');

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

module.exports = {
    validateUserMiddleware,
    registeredUserMiddleware
}