const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const user = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        // minlength: 5,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength:5
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

user.methods.generateAuthToken = function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET_KEY);
}

const User = mongoose.model('User', user);
module.exports = User;