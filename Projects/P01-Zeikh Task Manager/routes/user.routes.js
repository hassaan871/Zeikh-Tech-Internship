const { userSignup, userLoginController } = require('../controllers/user.controller');
const { validateUserMiddleware, validateLoginUserMiddleware, validDbUserMiddleware } = require('../middlewares/user.middlewares');
const  auth  = require('../middlewares/auth.middleware');
const { addTask, searchByHeading, deleteTask, getAllTasks, getCompletedTasks, getInCompletedTasks, updateTask } = require('../controllers/task.controller');
const express = require('express');
const router = express.Router();

router.post('/register-user', validateUserMiddleware, userSignup);
router.post('/login-user', validateLoginUserMiddleware, validDbUserMiddleware, userLoginController);

// Protected Routes
router.post('/add-task', auth, addTask);
router.post('/search-by-heading', auth, searchByHeading);
router.delete('/delete-task/:id', auth, deleteTask);
router.get('/get-all-tasks', auth, getAllTasks);
router.get('/get-completed-tasks', auth, getCompletedTasks);
router.get('/get-incompleted-tasks', auth, getInCompletedTasks);
router.put('/update-task/:id', auth, updateTask);

module.exports = router;