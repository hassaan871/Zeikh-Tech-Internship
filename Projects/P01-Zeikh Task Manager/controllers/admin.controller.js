const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 3;
        const skip = (page-1)*limit;

        const users = await User.find({isAdmin: false}).skip(skip).limit(limit);

        if(!users) return res.status(404).json({empty: "no user found"});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getUserByName = async (req, res) =>{
    try {
        const user = await User.findOne({username: req.body.username });
        if(!user) return res.status(404).json({empty: "no user found"});
        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    getAllUsers,
    getUserByName
}