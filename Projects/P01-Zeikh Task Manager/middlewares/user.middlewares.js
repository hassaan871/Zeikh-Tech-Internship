const { validateUser } = require('../validations/user.validation');

const validateUserMiddleware = (req, res, next) => {
    const { error } = validateUser(req.body);
    if(error) return res.status(400).json({ error: error.details[0].message});
    next();
}

module.exports = {
    validateUserMiddleware
}