const User = require('../models/user.model');
const bcrypt = require('bcrypt');

// considering middlewares have validated that the user doesn't exists
const userSignup = async (req, res) => {
    try{
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
    
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    
        await user.save();
        return res.status(201).header('x-auth-token',user.generateAuthToken()).send({
            id: user._id,
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


module.exports = {
    userSignup
}