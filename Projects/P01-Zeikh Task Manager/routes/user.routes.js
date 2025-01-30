const { userSignup, userLoginController } = require('../controllers/user.controller');
const { validateUserMiddleware, validateLoginUserMiddleware, validDbUserMiddleware } = require('../middlewares/user.middlewares');
const  auth  = require('../middlewares/auth.middleware');
const { addTask } = require('../controllers/task.controller');
const express = require('express');
const router = express.Router();

router.post('/register-user', validateUserMiddleware, userSignup);
router.post('/login-user', validateLoginUserMiddleware, validDbUserMiddleware, userLoginController);

// Protected Routes
router.post('/add-task', auth, addTask);

module.exports = router;