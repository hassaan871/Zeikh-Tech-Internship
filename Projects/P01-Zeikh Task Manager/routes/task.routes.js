const { updateTaskMiddleware, validateTaskMiddleware } = require('../middlewares/task.middleware');
const  auth  = require('../middlewares/auth.middleware');
const { addTask, searchByHeading, deleteTask, getAllTasks, getCompletedTasks, getInCompletedTasks, updateTask } = require('../controllers/task.controller');
const express = require('express');
const router = express.Router();

// Protected Routes
router.post('/add-task', auth, addTask);
router.get('/search-by-heading', auth, searchByHeading);
router.delete('/delete-task/:id', auth, deleteTask);
router.get('/get-all-tasks', auth, getAllTasks);
router.get('/get-completed-tasks', auth, getCompletedTasks);
router.get('/get-incompleted-tasks', auth, getInCompletedTasks);
router.put('/update-task/:id', auth, updateTaskMiddleware, validateTaskMiddleware,updateTask);

module.exports = router;
