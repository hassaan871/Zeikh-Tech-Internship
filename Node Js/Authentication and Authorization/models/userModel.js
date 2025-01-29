const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        // maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        // maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        // maxlength: 1024,
    }
});

user.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_PRIVATE_KEY);
    return token;
}

const User = mongoose.model('User', user);
module.exports = User;