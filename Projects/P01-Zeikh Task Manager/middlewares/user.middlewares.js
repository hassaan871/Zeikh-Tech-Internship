const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { validateUser, validateLoginUser, validateUsername, validatePassword, validateEmail } = require('../validations/user.validation');

const validateUserMiddleware = (req, res, next) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
}

const validateLoginUserMiddleware = (req, res, next) => {
    const { error } = validateLoginUser(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
}

const validDbUserMiddleware = async (req, res, next) => {

        let user;

        if (req.body.email) {
            user = await User.findOne({ email: req.body.email });
            if (!user) return res.status(404).json({ error: "Invalid email" });
        }

        if (req.body.username) {
            user = await User.findOne({ username: req.body.username });
            if (!user) return res.status(404).json({ error: "Invalid username" });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        // const validPassword = req.body.password === user.password ? true : false; 

        if (!validPassword) return res.status(401).json({ error: "Invalid password!" });

        req.user = user;
        next();
}

const validateUsernameMiddleware = (req, res, next) => {
    const { error } = validateUsername(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
}

const validateEmailMiddleware = (req, res, next) => {
    const { error } = validateEmail(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
}

const validatePasswordMiddleware = (req, res, next) => {
    const { error } = validatePassword(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
}

module.exports = {
    validateUserMiddleware,
    validateLoginUserMiddleware,
    validDbUserMiddleware,
    validateUsernameMiddleware,
    validateEmailMiddleware,
    validatePasswordMiddleware
}