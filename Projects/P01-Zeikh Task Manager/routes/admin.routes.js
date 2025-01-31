const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.middleware');
const validateAminMiddleware = require('../middlewares/auth.middleware');
const { getAllUsers, getUserByName, getUserByEmail } = require('../controllers/admin.controller');

router.get('/get-all-users', auth, validateAminMiddleware, getAllUsers);
router.get('/get-user-by-name', auth, validateAminMiddleware, getUserByName);
router.get('/get-user-by-email', auth, validateAminMiddleware, getUserByEmail);

module.exports = router;
