const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minlength: 5,
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

const User = mongoose.model('User', user);
module.exports = User;