const { userSignup } = require('../controllers/user.controller');
const { validateUserMiddleware } = require('../middlewares/user.middlewares');
const express = require('express');
const router = express.Router();

router.post('/register-user', validateUserMiddleware, userSignup);

module.exports = router;