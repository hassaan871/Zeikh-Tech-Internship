const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const User = require('../models/userModel');

const userSignUpController = async (req, res) => {
    const user = new User(
        _.pick(req.body, ['name','email','password'])
    //     {
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // }
);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    const token = user.generateAuthToken();
    return res.header('x-auth-token',token).send(_.pick(user, ['_id','name','email']));
}

const userLoginController = async (req, res) => {
    const token = req.user.generateAuthToken();
    res.send(token);
}

module.exports = {
    userSignUpController,
    userLoginController
};