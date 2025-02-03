const { userSignup, userLoginController, updateUsernameController, updateFirstNameController, updateLastNameController, updateEmailController,updatePasswordController } = require('../controllers/user.controller');
const { validateUserMiddleware, validateLoginUserMiddleware, validateFirstnameMiddleware, validateLastnameMiddleware, validDbUserMiddleware, validateUsernameMiddleware, validateEmailMiddleware, validatePasswordMiddleware } = require('../middlewares/user.middlewares');
const auth = require('../middlewares/auth.middleware');
const express = require('express');
const router = express.Router();

router.post('/register-user', validateUserMiddleware, userSignup);
router.post('/login-user', validateLoginUserMiddleware, validDbUserMiddleware, userLoginController);

//protected routes
router.put('/reset-username', auth, validateUsernameMiddleware, updateUsernameController);
router.put('/reset-email', auth, validateEmailMiddleware, updateEmailController);
router.put('/reset-password', auth, validatePasswordMiddleware, updatePasswordController);
router.put('/reset-firstname', auth, validateFirstnameMiddleware, updateFirstNameController);
router.put('/reset-lastname', auth, validateLastnameMiddleware, updateLastNameController);


module.exports = router;