const validateTask = require('../validations/task.validation');
const Task = require('../models/tasks.model');

const updateTaskMiddleware = async (req, res, next) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findById(taskId);
        
        if( !task ) return res.status(404).json({empty: "No task found"});
        
        if( req.body.heading ) task.heading = req.body.heading;
        if( req.body.description ) task.description = req.body.description;
        if( req.body.isCompleted ) task.isCompleted = req.body.isCompleted;
        if( !req.body.heading ) req.body.heading = task.heading;
        if( !req.body.description ) req.body.description = task.description;
        if( !req.body.isCompleted ) req.body.isCompleted = task.isCompleted;
        
        task.save();
        req.body.task = task;
        next();

    } catch (error) {
        res.status(500).json(error);
    }
}

const validateTaskMiddleware = (req, res, next) => {
    const { error } = validateTask({
        heading: req.body.heading,
        description: req.body.description,
        isCompleted: req.body.isCompleted
    });
    if(error) return res.status(400).json({ error : error.details[0].message});
    next();
}

module.exports = {
    updateTaskMiddleware,
    validateTaskMiddleware
};