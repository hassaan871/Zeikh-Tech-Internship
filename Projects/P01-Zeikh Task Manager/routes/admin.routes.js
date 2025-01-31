const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.middleware');
const { validateLoginUserMiddleware } = require('../middlewares/user.middlewares');
const validateAminMiddleware = require('../middlewares/auth.middleware');
const { getAllUsers } = require('../controllers/admin.controller');

router.get('/get-all-users', auth, validateAminMiddleware, getAllUsers);

module.exports = router;
