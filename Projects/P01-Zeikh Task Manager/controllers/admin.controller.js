const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({isAdmin: false});
        if(!users) return res.status(404).json({empty: "no user found"});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    getAllUsers
}