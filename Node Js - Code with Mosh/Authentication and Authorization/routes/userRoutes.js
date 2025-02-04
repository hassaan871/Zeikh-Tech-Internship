const express = require('express');
const { userSignUpController, userLoginController } = require('../controllers/userController');
const { registeredUserMiddleware, validateUserMiddleware,  validateLoginUserMiddleware,
    invalidUserMiddleware } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.post('/register-user', validateUserMiddleware, registeredUserMiddleware, userSignUpController);
router.post('/login-user', validateLoginUserMiddleware, invalidUserMiddleware, userLoginController)

module.exports = router;