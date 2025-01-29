const Joi = require('joi');

const validateUser = (user) =>{
    const userSchema = Joi.object({
        username: Joi.string().min(5).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(5).required()
    });
    return userSchema.validate(user);
}

module.exports = {
    validateUser
}