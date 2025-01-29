const mongoose = require('mongoose');
const User = require('./user.model');

const task = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    heading: {
        type: String,
        minlength: 5,
        maxlength:255,
        required: true,
    },
    description: {
        type:String,
        minlength:10,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
},{ timestamps: true });

const Task = mongoose.model('Task', task);
module.exports = Task;