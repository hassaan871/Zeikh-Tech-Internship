const { userSignup } = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

router.post('/register-user', userSignup);

module.exports = router;