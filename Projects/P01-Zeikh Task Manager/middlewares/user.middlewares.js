const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { validateUser, validateLoginUser } = require('../validations/user.validation');

const validateUserMiddleware = (req, res, next) => {
    const { error } = validateUser(req.body);
    if(error) return res.status(400).json({ error: error.details[0].message});
    next();
}

const validateLoginUserMiddleware = (req, res, next) => {
    const { error } = validateLoginUser(req.body);
    if (error) return res.status(400).json({error: error.details[0].message});
    next();
}

const validDbUserMiddleware = async (req, res, next) => {

    let user;
    
    if(req.body.email) user = await User.findOne({email: req.body.email});
    if(req.body.username) user = await User.findOne({username: req.body.username});

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(!user || !validPassword) return res.status(401).json({error: "Invalid email or password!"});

    req.user = user;
    next();
}

module.exports = {
    validateUserMiddleware,
    validateLoginUserMiddleware,
    validDbUserMiddleware
}