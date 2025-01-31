const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.middleware');
const { validateLoginUserMiddleware } = require('../middlewares/user.middlewares');
const validateAminMiddleware = require('../middlewares/auth.middleware');
const { getAllUsers, getUserByName } = require('../controllers/admin.controller');

router.get('/get-all-users', auth, validateAminMiddleware, getAllUsers);
router.get('/get-user-by-name', auth, validateAminMiddleware, getUserByName);

module.exports = router;
