const Task = require('../models/tasks.model');

const addTask = async (req, res) => {
    try {
        const task = new Task({
            userId: req.body.userId,
            heading: req.body.heading,
            description: req.body.description,
            isCompleted: req.body.isCompleted === true ? req.body.isCompleted : undefined
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

//search the task by heading
const searchByHeading = async (req, res) =>{
    try {
        const task = await Task.find({
            userId : req.body.userId,
            heading : req.body.heading
        });
        return res.status(200).json(task);
    } catch (error) {
     res.json(error);   
    }
}

const deleteTask = async (req, res) => {
   try {
     const taskId = req.params.id;
     const result = await Task.deleteOne({_id:taskId});

     if(result.deletedCount === 0){
        return res.status(404).json({error: "Task not found"});
     }

     res.status(200).json({success: "Task deleted successfully"});
   } catch (error) {
    res.status(500).json(error);
   }
}

const getAllTasks = async (req, res) => {
    try{
        const page = req.query.page || 1;
        const limit = req.query.limit || 3;
        const skip = (page - 1)*limit;      
        const tasks = await Task.find({
            userId: req.body.userId
        }).skip(skip).limit(limit);
        if(!tasks) return res.status(200).json({empty: "No task found"});
        return res.status(200).json(tasks);
    }catch(error){
        return res.status(500).json(error);
    }
}

const getCompletedTasks = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 3;
        const skip = (page - 1)*limit;
        const tasks = await Task.find({
            userId: req.body.userId,
            isCompleted: true
        }).skip(skip).limit(limit);
        if(!tasks) return res.status(200).json({empty: "No completed task"});
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getInCompletedTasks = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 3;
        const skip = (page - 1)*limit;
        const tasks = await Task.find({
            userId: req.body.userId,
            isCompleted: false
        }).skip(skip).limit(limit);
        if(!tasks) return res.status(200).json({empty: "No incomplete task"});
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const result = await Task.findOne({_id : taskId});

        if(!result) return res.status(404).json({empty: "No task found!"});

        // if(req.body.heading) 

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    addTask,
    searchByHeading,
    deleteTask,
    getAllTasks,
    getCompletedTasks,
    getInCompletedTasks,
    updateTask

}