const { userSignup, userLoginController } = require('../controllers/user.controller');
const { validateUserMiddleware, validateLoginUserMiddleware, validDbUserMiddleware } = require('../middlewares/user.middlewares');
const express = require('express');
const router = express.Router();

router.post('/register-user', validateUserMiddleware, userSignup);
router.post('/login-user', validateLoginUserMiddleware, validDbUserMiddleware, userLoginController);

module.exports = router;