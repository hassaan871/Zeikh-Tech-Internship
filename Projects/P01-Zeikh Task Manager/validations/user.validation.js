const Joi = require('joi');

const validateUser = (user) =>{
    const userSchema = Joi.object({
        username: Joi.string().min(5).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(5).required()
    });
    return userSchema.validate(user);
}

const validateLoginUser = (user) => {
    const userSchema = Joi.object({
        username: Joi.string().min(5),
        email: Joi.string().min(5).email(),
        password: Joi.string().min(5).required()
    }).or('email', 'username');
    return userSchema.validate(user);
}

const validateUsername = (username) =>{
    const userSchema = Joi.object({
        username:Joi.string().min(5).required()
    });
    return userSchema.validate(username);
}

const validateEmail = (email) =>{
    const userSchema = Joi.object({
        email:Joi.string().min(5).required().email()
    });
    return userSchema.validate(email);
}

const validatePassword = (password) =>{
    const passwordSchema = Joi.object({
        password: Joi.string().min(5).required()
    });
    return passwordSchema.validate(password);
}

module.exports = {
    validateUser,
    validateLoginUser,
    validateUsername,
    validatePassword,
    validateEmail
}