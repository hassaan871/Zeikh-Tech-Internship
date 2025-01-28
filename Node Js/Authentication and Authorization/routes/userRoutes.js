const express = require('express');
const userController = require('../controllers/userController');
const { registeredUserMiddleware, validateUserMiddleware } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.post('/register-user', validateUserMiddleware, registeredUserMiddleware, userController);

module.exports = router;