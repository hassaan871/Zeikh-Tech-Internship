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

//search the task by heading
const searchByHeading = async (req, res) =>{
    try {
        const task = await Task.find({
            userId : req.body.userId,
            heading : req.body.heading
        });
        res.status(200).json(task);
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

module.exports = {
    addTask,
    searchByHeading,
    deleteTask
}