const _ = require('lodash');
const User = require('../models/userModel');

const userController = async (req, res) => {
    const user = new User(
        _.pick(req.body, ['name','email','password'])
    //     {
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // }
);

    await user.save();
    return res.send(_.pick(user, ['_id','name','email']));
}

module.exports = userController;