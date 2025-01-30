const Task = require('../models/tasks.model');

const addTask = async (req, res) => {
    try {
        const task = new Task({
            userId: req.body.userId,
            heading: req.body.heading,
            description: req.body.description   
        });

        await task.save();
        return res.status(201).json({
            userId: task.userId,
            heading: task.heading,
            description: task.description,
            isCompleted: task.isCompleted
        });

    } catch (error) {
        if(error.code === 11000){
            res.status(400).json({error:"Username or email already registered!"});
        }else{
            res.status(500).json(error);
        }
    }
}

module.exports = {
    addTask
}