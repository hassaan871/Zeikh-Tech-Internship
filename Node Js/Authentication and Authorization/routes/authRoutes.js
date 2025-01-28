const express = require('express');
const userSignUpController = require('../controllers/authController');
const { registeredUserMiddleware, validateUserMiddleware } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.post('/register-user', validateUserMiddleware, registeredUserMiddleware, userSignUpController);

module.exports = router;