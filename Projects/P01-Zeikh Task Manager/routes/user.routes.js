const { userSignup, userLoginController } = require('../controllers/user.controller');
const { validateUserMiddleware, validateLoginUserMiddleware, validDbUserMiddleware } = require('../middlewares/user.middlewares');
const  auth  = require('../middlewares/auth.middleware');
const express = require('express');
const router = express.Router();

router.post('/register-user', validateUserMiddleware, userSignup);
router.post('/login-user', validateLoginUserMiddleware, validDbUserMiddleware, userLoginController);
router.post('/', auth );

module.exports = router;