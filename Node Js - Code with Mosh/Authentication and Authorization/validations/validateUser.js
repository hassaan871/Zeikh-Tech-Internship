const Joi = require('joi');

function validateUser(user) {
    const userSchema = Joi.object({
        name: Joi.string().min(5).required(),
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(5).required()
    });
    return userSchema.validate(user);
}

function validateLoginUser(user) {
    const userSchema = Joi.object({
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(5).required()
    });
    return userSchema.validate(user);
}

module.exports = {
    validateUser,
    validateLoginUser
};