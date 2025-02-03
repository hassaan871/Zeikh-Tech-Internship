const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const userSignup = async (req, res) => {
    try{
        const user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
    
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    
        await user.save();
        return res.status(201).header('x-auth-token',user.generateAuthToken()).json({
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
        });

    }catch(error){
        if(error.code === 11000){
            res.status(400).json({error:"Username or email already registered!"});
        }else{
            res.status(500).json({error: error.message});
        }
    }
}

const userLoginController = (req, res) => {
    try {
        return res.status(200).json({jwt_token: req.user.generateAuthToken()});
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updateUsernameController = async (req, res) => { 
    // try {
        const user = await User.findById(req.body.userId);
        user.username = req.body.username;
        user.save();
        return res.status(200).json({id:user._id,firstname: user.firstname, lastname:user.lastname, username: user.username, email: user.email });
    // } catch (error) {
    //     return res.status(500).json(error);
    // }
}

const updateEmailController = async (req, res) => { 
    try {
        const user = await User.findById(req.body.userId);
        user.email = req.body.email;
        user.save();
        return res.status(200).json({id:user._id, firstname: user.firstname, lastname: user.lastname,username: user.username, email: user.email });
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updatePasswordController = async (req, res) => { 
    try {
        const user = await User.findById(req.body.userId);
        user.password = req.body.password;
        user.save();
        return res.status(200).json({success:"Password updates successfully" });
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {
    userSignup,
    userLoginController,
    updateUsernameController,
    updateEmailController,
    updatePasswordController
}